<script>
    import SettingsColumns from './settings/SettingsColumns.svelte'
import SettingsTable from './settings/SettingsTable.svelte';
    const panels = ["panelSettings"]

    let activeTab = "TabColums"

    function switchTab (e) {
        activeTab = e.target.id; 
        console.log(activeTab)
    }    
</script>

<article class="panel is-warning">
    <p class="panel-heading">
      Настройки
    </p>
    <p class="panel-tabs">

      
    <a id="TabColums" on:click={switchTab} class:is-active={activeTab == "TabColums"}>Выбор колонок</a>

    <a id="TabTable" on:click={switchTab} class:is-active={activeTab == "TabTable"}> Настройка таблицы</a>

      <a>Private</a>
      <a>Sources</a>
      <a>Forks</a>
    </p>

    {#if activeTab == "TabColums"}
        <SettingsColumns />    
    {:else if activeTab == "TabTable"}
        <SettingsTable />
    {/if}

</article>