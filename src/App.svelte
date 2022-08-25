<script>
import FileChoose from './components/FileChoose.svelte'
import Greet from './components/Greet.svelte'

let name = "name"
let activeTab = "TJ"

function setName() {
  name = "Sem"
}

const switchTab = tab => () => {
  activeTab = tab; 
  name = tab
  console.log(tab)
}

</script>

<main class="container is-widescreen">

  <div class="tabs is-boxed">
    <ul>
      <li class="is-active">
        <button 
          class:is-active={activeTab == "TJ"} 
          on:click={switchTab("TJ")} 
          class="button is-primary">
          Технологический журнал
        </button>
      </li>
      <li>
        <button 
          class:is-active={activeTab == "Setting"} 
          on:click={switchTab("Setting")} 
          class="button is-warning">
          Технологический журнал
        </button>
      </li>
    </ul>
  </div>
  <p>{name}</p>

  {#if (activeTab == "TJ")}
    <FileChoose />
  {/if}

</main>

