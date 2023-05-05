const { ExcuteQuery } = require("../../../config/db/dbCon")

const TimeStamp = require("../../utils/time_stamp")


const testService = {


    ///
    /// 세입자 전체 데이터 조회
    getTest: async (req) => {

        return { "name": "TEST" };
    },


}

module.exports = testService;