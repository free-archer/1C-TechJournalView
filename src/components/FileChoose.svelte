<script>
  let filename = ""
</script>

<div class="level-left">
  <div class="input_file pr-3 is-widescreen">
    <input value={filename} class="input" type="text" placeholder="Text input">
  </div>

  <div class="file">
    <label class="file-label">
      <input bind:value={filename} class="file-input" type="file" name="resume" >
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
</div>

<style>
  .input_file {
    width: 60%;
  }
</style>