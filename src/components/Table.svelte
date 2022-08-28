<script>
   import {mParamsStore, mColumsStore} from '../libs/store'

   import Cell from "./Cell.svelte";
</script>

<div class="table">

   <div class="table-row row-heder ">
      {#each $mColumsStore as column}
         <Cell paramValue={column} isHeder={true}/>
      {/each}  
   </div>

   {#each $mParamsStore as params}
   <div class="table-row">
      {#each $mColumsStore as column}
         <Cell paramValue={(params.get(column)) ? params.get(column) : ""}/>
      {/each}  
   </div>
   {/each}

</div>
    
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