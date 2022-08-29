<script>
   import {mParamsStore, mColumsStore} from '../libs/store'

   import Cell from "./Cell.svelte";
   import Paginations from './Paginations.svelte';

   //paginations
   let start_paginations = 0
   let step_paginations = 10
</script>

<div class="table">

   <div class="table-row row-heder ">
      {#each $mColumsStore as column}
         <Cell paramValue={column} isHeder={true}/>
      {/each}  
   </div>

   {#each $mParamsStore.slice(start_paginations, step_paginations) as params}
   <div class="table-row">
      {#each $mColumsStore as column}
         <Cell paramValue={(params.get(column)) ? params.get(column) : ""}/>
      {/each}  
   </div>
   {/each}

</div>

<Paginations />
    
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