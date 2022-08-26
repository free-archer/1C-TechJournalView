<script>
  import {ParseTJ} from '../libs/parse.js'

  let filename = ""
  let files = []
  let mParams = undefined
  let myJsonString = ""

  function parseTJ() {
    if (filename == "") {
      alert("Не выбран файл лога")
      return
    }

    debugger
    mParams = ParseTJ.parse(files, filename)
    console.log(mParams)
    myJsonString = JSON.stringify(mParams);
    console.log(myJsonString)
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
<p>{myJsonString}</p>

<style>
  .input_file {
    width: 60%;
  }
</style>