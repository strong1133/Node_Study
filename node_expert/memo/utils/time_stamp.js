const timeStamp ={
    makeCurStamp : ()=>{
        let curStamp;
        
        const start = Date.now();
        let timestamp = start;
        let date = new Date(timestamp);

        let y = date.getFullYear();
        let m =  date.getMonth() +1;
        let d = date.getDate();
        let h = date.getHours();
        let mm =  date.getMinutes();
        let ss = date.getSeconds();

        curStamp = `${y}-${m}-${d} ${h}:${mm}:${ss}`;
        return curStamp;
    }
};


module.exports = timeStamp