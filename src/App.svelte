<script>
import FileChoose from './components/FileChoose.svelte'
import Settings from './components/Settings.svelte';


let name = "name"
let activeTab = "TJ"

const switchTab = tab => () => {
  activeTab = tab; 
  name = tab
}

</script>

<main id="mainContainer" class="container is-widescreen">

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
          Настройки
        </button>
      </li>
    </ul>
  </div>

  {#if (activeTab == "TJ")}
    <FileChoose />
  {:else if (activeTab == "Setting")}
    <Settings />
  {/if}

</main>

