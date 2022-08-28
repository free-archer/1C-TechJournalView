'use strict';

export function parseFile(filename, text) {
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
    }
    // console.log(mainArray)

    //2. Получаем список параметров
    
    const mParams = []
    const mColums = new Set()

    const matchesFile = filename.match(/(\d{2})(\d{2})(\d{2})(\d{2})/)
    const [, year, month, day, hour] = matchesFile
    
    for (let elem of mainArray) {
        const dictParam = new Map()
        
        const matchesTime = elem.match(/(\d{2}):(\d{2}).(\d{6})/)
        const [minute, second, msec] = matchesTime
        const date_time_str = `20${year}-${month}-${day} ${hour}:${minute}:${second}.${msec}`

        addToDict(["time", date_time_str], dictParam, mColums) 

        let matches = elem.match(/,(\w+)='([^']+)|,(\w+)="([^"]+)|,([A-Za-z0-9А-Яа-я:]+)=([^,]+)/g)
        for (let params of matches) {
            const mparams = params.split("=")
            if (mparams.length == 2) {
                addToDict(mparams, dictParam, mColums) 
            }
        }
        mParams.push(dictParam)
    }

    // console.log(mParams)
    return {mParams, mColums}
}

function addToDict(mparams, dictParam, mColums) {
    let pName = mparams[0].toLowerCase()
    const pValue = mparams[1].replace("'","").replace("''","").replace("-#-", '\n')

    if (pName[0] === ",") {
        pName = pName.slice(1)
    }

    dictParam.set(pName, pValue)
    mColums.add(pName)
}
