<script>
  import {parseFile} from '../libs/parse.js'
  import {mParamsStore, mColumsStore} from '../libs/store'

  import Table from './Table.svelte'

  let filename = ""
  let files = []
    
  function parseTJ() {
    if (filename == "") {
      alert("Не выбран файл лога")
      return
    }

    // const reader = ParseTJ.parse(files, filename)
    if (files.length == 0) {
      console.log("Пустой массив файлов")
      return
    }
        
    let reader = new FileReader()
    reader.readAsText(files[0])

    reader.onloadend = () => {
            const text = reader.result

            const parseDate = parseFile(filename, text)

            mParamsStore.set(parseDate.mParams)
            mColumsStore.set(Array.from(parseDate.mColums))

            // console.log($mParamsStore)
            // console.log($mColumsStore)            
        } 
    
    reader.onerror = function() {
        console.log(reader.error);
        return
    }
   
  }


</script>

<div class="is-flex is-flex-direction-row is-justify-content-flex-start m-2">

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


<style>
  .input_file {
    width: 60%;
  }
</style>