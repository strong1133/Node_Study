const timeStamp = {
    makeCurStamp: () => {
        let curStamp;

        const start = Date.now();
        let timestamp = start;
        let date = new Date(timestamp);

        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let h = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();

        curStamp = `${y}-${m}-${d} ${h}:${mm}:${ss}`;
        return curStamp;
    },

    ///
    /// yyyy-mm-dd 형태의 날짜 포멧터
    makeDateToString: (date, delimiter = '-') => {
        try {
            let dateStr = '';

            let yy = date.getFullYear();
            let mm = date.getMonth() + 1;
            let dd = date.getDate();

            if (mm < 10) {
                mm = `0${mm}`
            }
            if (dd < 10) {
                dd = `0${dd}`
            }

            dateStr = `${yy}${delimiter}${mm}${delimiter}${dd}`
            return dateStr;
        } catch (e) {
            return '';
        }

    },

    ///
    /// 두 날짜 간의 일수 차이 계산
    getDateDiff: (d1, d2) => {
        const date1 = new Date(d1);
        const date2 = new Date(d2);

        const diffDate = date1.getTime() - date2.getTime();

        return Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24))); // 밀리세컨 * 초 * 분 * 시 = 일
    },

    /// 두 날짜 간의 개월수 차이 계산
    getMonthDiff: (d1, d2) => {
        const date1 = new Date(d1); // start
        const date2 = new Date(d2); // end

        let diffMonth = (date2.getFullYear() - date1.getFullYear()) * 12;
        diffMonth -= date1.getMonth() + 1;
        diffMonth += date2.getMonth() + 1;

        return diffMonth;
    },

    ///
    /// d1을 기준으로 d2의 경과 시간을 일로 환산해 계산
    subtractDate: (d1, d2) => {
        const date1 = new Date(d1);
        const date2 = new Date(d2);

        const diffDate = date1.getTime() - date2.getTime();

        return Math.round(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
    },


    /// 어떤 날짜가 현재 년월에 해당하는 확인 
    isNowYearMonth: (curDateStr, year, month) => {
        const inputDate = new Date(curDateStr);
        const now = new Date(year, month, 0)

        return inputDate.getFullYear() === now.getFullYear() &&
            inputDate.getMonth() === now.getMonth();
    }
};




module.exports = timeStamp