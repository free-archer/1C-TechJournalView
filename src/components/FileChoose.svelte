<script>
  import {parseFile} from '../libs/parse.js'
  import {mParamsStore, mColumsStore, count_row, current_page, step_paginations} from '../libs/store'

  import Table from './Table.svelte'

  let filename = ""
  let files = []

  let count_colums = 0
    let interval_read = 0, interval_parse = 0
    
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

    $current_page = $step_paginations

    let reader = new FileReader()
    reader.readAsText(files[0])

    reader.onloadend = () => {
      let text = reader.result

      const time_read = performance.now()
      interval_read = time_read-time_start
      console.log(`Прочитали файл за: ${interval_read} ms`)  

      let parseDate = parseFile(filename, text)
      text = undefined

      const time_parse = performance.now()
      interval_parse =time_parse-time_start
      console.log(`Парсинг файла за: ${interval_parse} ms`)  

      count_colums = parseDate.mColums.size
      count_row.set(parseDate.mParams.length)
      console.log(`Кол строк: ${$count_row}`)
      mParamsStore.set(parseDate.mParams)
      mColumsStore.set(Array.from(parseDate.mColums)) 
      console.log(`Кол столбцов: ${count_colums}`)
      parseDate = undefined
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

<p>Время чтения файла: {interval_read}</p>
<p>Время разбора лога: {interval_parse}</p>
<p>Количество колонок: {count_colums}</p>
<p>Количество строк: {$count_row}</p>

<style>
  .input_file {
    width: 60%;
  }
</style>