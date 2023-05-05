const mysql = require('mysql2');
const { log } = require("console");

const ErrorDto = require("../../src/utils/error_dto")
const { ErrorType } = require("../../src/model/enum/common/error_type")

let pool = null;


// DB 접속
const Connection = async (res) => {
    console.log(process.env.DB_HOST);

    let tempPool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'TEST',

        ///
        /// bool 처리
        typeCast: (filed, useDefaultTypeCasting) => {
            if ((filed.type === 'BIT') && (filed.length === 1)) {
                let bytes = filed.buffer();
                if (!bytes) return false;
                return (bytes[0] === 1);
            }
            return (useDefaultTypeCasting());
        }
    });

    tempPool.getConnection((error, connection) => {
        connection.query("SELECT 1", (err, res, fileds) => {
            if (!err) {
                console.log("DB 연결 성공");
                connection.release();
            }
        });
    });

    pool = tempPool;
}

// 쿼리 실행
const ExcuteQuery = async (req, res) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            connection.query(req, (err, row) => {
                if (err) {
                    console.log("에러발생!")
                    connection.release();
                    reject(ErrorDto.throwError("쿼리수행 오류", ErrorType.INTERNAL_SERVER_ERROR))
                } else {
                    console.log("쿼리 성공")
                    connection.release();
                    resolve(row);
                }
            });
        });
    });
}

// DB 접속 종료
const ConnectionEnd = async (res) => {
    pool.end(function (err) {
        if (err)
            return log(err);
        console.log("DB 연결 종료 성공");
    })
}

module.exports = { Connection, ConnectionEnd, ExcuteQuery };

