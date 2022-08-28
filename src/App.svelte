<script>
import FileChoose from './components/FileChoose.svelte'

let name = "name"
let activeTab = "TJ"

const switchTab = tab => () => {
  activeTab = tab; 
  name = tab
}

</script>

<main class="container is-widescreen">

  <div class="tabs is-centered is-toggle m-2">
    <ul>
      <li>
        <button 
          class:is-active={activeTab == "TJ"} 
          on:click={switchTab("TJ")} 
          class="button is-primary">
          Технологический журнал
        </button>
      </li>
      <li class="ml-2">
        <button 
          class:is-active={activeTab == "Setting"} 
          on:click={switchTab("Setting")} 
          class="button is-warning">
          Технологический журнал
        </button>
      </li>
    </ul>
  </div>

  {#if (activeTab == "TJ")}
    <FileChoose />
  {/if}

</main>

