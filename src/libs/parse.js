'use strict';


export function parse(files) {
    const time_start = performance.now()

    const mainArray= []
    const dictParams = Map
    const lparams = Map
    let file = new Blob

    if (files.length === 1) {
        file = files[0]
    } else {
        return
    }
    

    let reader = new FileReader()
    reader.readAsText(file)

    reader.onload = function() {
        const text = reader.result
        console.log(text);
        parseFile(text)
      };
    
      reader.onerror = function() {
        console.log(reader.error);
        return
      };  
      


        
}

function parseFile(text) {
    // let str_log = ""
    // const Lines = fs.readFileSync(filename).toString().split('\n')
    // for (let str of Lines) {
    //   str.trim()

    //   const rx = new RegExp("\\d{2}:\\d{2}.\\d{6}-\\d")
    // //   let matches = str.match(/\d{2}:\d{2}.\d{6}-\d/)
    //   if (rx.test(str)) {
    //     if (str_log !== "") {
    //       mainArray.push(str_log)
    //     }

    //     str_log = str

    //     } else {
    //         str_log = str_log+"-#-"+str
    //     }
    //   console.log(str_log)
    // console.log("parse")
    // }



    // const time_end = performance.now()
    // console.log('Выполнено! Время выполнения = %s ms', time_end-time_start)  
}