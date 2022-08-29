<script>
   import {mParamsStore, mColumsStore, step_paginations, current_page} from '../libs/store'

   import Cell from "./Cell.svelte";
   import Paginations from './Paginations.svelte';

</script>

<div class="table is-small">

   <div class="table-row row-heder ">
      {#each $mColumsStore as column}
         <Cell paramValue={column} isHeder={true}/>
      {/each}  
   </div>

   {#each $mParamsStore.slice($current_page-$step_paginations, $current_page) as params}
   <div class="table-row">
      {#each $mColumsStore as column}
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