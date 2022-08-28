<script>
  import {parseFile} from '../libs/parse.js'
  import {mParamsStore, mColumsStore, time_readStore, time_parseStore, time_storeStore, count_colums, count_row} from '../libs/store'

  import Table from './Table.svelte'

  let filename = ""
  let files = []
    
  function parseTJ() {
    if (filename == "") {
      alert("Не выбран файл лога")
      return
    }

    if (files.length == 0) {
      console.log("Пустой массив файлов")
      return
    }
        
    const time_start = performance.now()

    let reader = new FileReader()
    reader.readAsText(files[0])

    reader.onloadend = () => {
      let text = reader.result

      const time_read = performance.now()
      time_readStore.set(time_read-time_start)
      console.log(`Прочитали файл за: ${time_read-time_start} ms`)  

      let parseDate = parseFile(filename, text)
      text = undefined

      const time_parse = performance.now()
      time_parseStore.set(time_parse-time_start)
      console.log(`Парсинг файла за: ${time_parse-time_start} ms`)  

      count_colums.set(parseDate.mColums.size)
      count_row.set(parseDate.mParams.length)
      mParamsStore.set(parseDate.mParams)
      mColumsStore.set(Array.from(parseDate.mColums)) 
      console.log(`Кол столбцов: ${parseDate.mColums.size}`)
      parseDate = undefined
      
      const time_store = performance.now()
      time_parseStore.set(time_store-time_start)
      console.log(`Отправили в store за: ${time_store-time_start} ms`)  
    } 
    
    reader.onerror = function() {
        console.log(reader.error);
        return
    }
  }
</script>

<div class="is-flex is-flex-direction-row is-justify-content-flex-start m-2 is-widescreen">

  <div class="input_file pr-3 is-widescreen">
    <input value={filename} class="input" type="text" placeholder="Text input">
  </div>

  <div class="file">
    <label class="file-label">
      <input bind:value={filename} bind:files={files} class="file-input" type="file" name="resume" id="file">
      <span class="file-cta">
        <span class="file-icon">
          <i class="fas fa-upload"></i>
        </span>
        <span class="file-label">
          Выбирите файл журнала
        </span>
      </span>
    </label>
  </div>

  <button 
    disabled={filename==""}
    on:click={parseTJ} 
    class="button is-info ml-2">
    Прочитать
  </button>  

</div>

<div class="table-container">
  <Table />
</div>

<p>Время чтения файла: {$time_readStore}</p>
<p>Время разбора лога: {$time_parseStore}</p>
<p>Количество колонок: {$count_colums}</p>
<p>Количество строк: {$count_row}</p>

<style>
  .input_file {
    width: 60%;
  }
</style>