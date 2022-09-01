<script>
   import {onMount} from 'svelte'

   import {mParamsStore, mColumsStore, showedColums, columnWidth, step_paginations, current_page} from '../libs/store'

   import Cell from "./Cell.svelte";
   import Paginations from './Paginations.svelte';

  onMount(() => {
      const table = document.getElementById("mainContainer")
      console.log(table)
      $columnWidth = Math.ceil(table.clientWidth / $showedColums.length) - 10
  }) 


</script>

<div id="table" class="table is-small">

   <div class="table-row row-heder ">
      {#each $showedColums as column}
         <Cell paramValue={column} isHeder={true}/>
      {/each}  
   </div>

   {#each $mParamsStore.slice($current_page-$step_paginations, $current_page) as params}
   <div class="table-row">
      {#each $showedColums as column}
         <Cell paramValue={(params.get(column)) ? params.get(column) : ""}/>
      {/each}  
   </div>
   {/each}

</div>

{#if ($mParamsStore.length > 0)}
   <Paginations />   
{/if}

    
<style>
.table
{
   display: flex;
   flex-wrap:wrap;
   flex-direction: column;
} 

.table-row
{
   display: flex;
   flex-direction: row;
   
}
</style>
