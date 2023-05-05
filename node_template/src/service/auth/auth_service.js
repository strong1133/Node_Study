const { sign, verify } = require("../../utils/jwt/jwt");
const { hasher, matcher } = require("../../utils/jwt/hash");
const { ExcuteQuery } = require("../../../config/db/dbCon")
const AuthModel = require("../../model/sql/auth/auth_model");

const ErrorDto = require("../../utils/error_dto")
const { ErrorType } = require("../../model/enum/common/error_type")

const authService = {

    ///
    /// 로그인 
    login: async (req) => {
        let token = '';
        let id = req['id'];
        let rawPwd = req['password']

        let queryStr = AuthModel.getUser(id)
        let dbRes = await ExcuteQuery(queryStr)
        if (dbRes.length == 0) {
            return ErrorDto.throwError("해당 하는 유저가 없습니다.", ErrorType.NOT_FOUND)
        }

        let data = dbRes[0];
        let curPwd = data['PASSWORD'];

        let isAuth = matcher(rawPwd, curPwd)

        if (isAuth) {
            let accessToken = await sign(data);

            // 로그인 성공
            token = {
                "accessToken": accessToken
            }
        } else {
            return ErrorDto.throwError("", ErrorType.BAD_REQUEST)
        }

        return token;
    },

    ///
    /// 로그인 유저 정보 반환
    me: async (req) => {
        let authorizationToken = req['authorization']

        let verifyed = await verify(authorizationToken)
        let result = verifyed;

        /// 에러 객체 가 아니면 디코드에 성공 한것으로 간주       
        if (!(verifyed instanceof Error)) {
            let companyUserId = verifyed.idx;
            let queryStr = AuthModel.getUserInfo(companyUserId)
            let dbRes = await ExcuteQuery(queryStr)
            result = dbRes[0];
        }

        return result;

    }



}

module.exports = authService;


