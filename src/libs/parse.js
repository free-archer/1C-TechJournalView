'use strict';

export class ParseTJ {
    time_start = undefined
    time_end = undefined
    static duration = 0
    text= ""
    mParams = undefined



    file = new Blob
    filename = ""

    readF = () => {
        console.log("read f")
        console.log("read f")
    }


    static parse(files, filename) {
        this.time_start = performance.now()

        this.filename = filename



        if (files.length === 1) {
            this.file = files[0]
        } else {
            return
        }
        

        let reader = new FileReader()
        let text = reader.readAsText(this.file)

        reader.onloadend = () => {
            const text = reader.result
            console.log(text);
            this.parseFile(text)
        }
        
        // reader.onloadend = () => {
        //     this.readF()
        // }

        reader.onerror = function() {
            console.log(reader.error);
            return
        }

        debugger

        return this.mParams
    }


    static parseFile(text) {
        
        if (!text) {
            alert("Пустой файл")
            return
        }
        //1. Создаем массив строк склеивая их по регулярному выражению
        const mainArray= []

        console.log("Start Parse")
        let str_log = ""
        for (let str of text.split('\n')) {
        str.trim()

        const rx = new RegExp("\\d{2}:\\d{2}.\\d{6}-\\d")
        if (rx.test(str)) {
            if (str_log !== "") {
                mainArray.push(str_log)
            }

            str_log = str

            } else {
                str_log = str_log+"-#-"+str
            }
        // console.log(str_log)
        
        }

        //2. Получаем список параметров
        console.log("parse")
        const dictParam = new Map()
        const mParams = []

        const matchesFile = this.filename.match(/(\d{2})(\d{2})(\d{2})(\d{2})/)
        const [, year, month, day, hour] = matchesFile
        
        for (let elem of mainArray) {
            const matchesTime = elem.match(/(\d{2}):(\d{2}).(\d{6})/)
            const [minute, second, msec] = matchesTime
            const date_time_str = `20${year}-${month}-${day} ${hour}:${minute}:${second}.${msec}`
            dictParam.set("time", date_time_str)

            let matches = elem.match(/,(\w+)='([^']+)|,(\w+)="([^"]+)|,([A-Za-z0-9А-Яа-я:]+)=([^,]+)/g)
            for (let params of matches) {
                if (params[0] === ",") {
                    params = params.slice(1)
                }
                const mparams = params.split("=")
                if (mparams.length == 2) {
                    dictParam.set(mparams[0].toLowerCase(), mparams[1].replace("'","").replace("''","").replace("-#-", '\n'))
                }
            }

            mParams.push(dictParam)
        }



        this.time_end = performance.now()
        this.duration = this.time_end - this.time_start
        // console.log('Выполнено! Время выполнения = %s ms', time_end-time_start)  
        //console.log(mParams)
        debugger
        this.mParams =mParams
    }
}