<script>
   import { get } from 'svelte/store';
import {mParamsStore, mColumsStore} from '../libs/store'

   import Cell from "./Cell.svelte";

   function Test() {
      debugger
      for (let params of $mParamsStore) {
          for (let col of $mColumsStore) {
             let paramValue = params.get(col)
          }  
      }
   }

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

     <!-- <button 
     on:click={Test} 
     class="button is-info">
     Test
   </button>   -->
    
   <style>
      .table
   {
      display: flex;
      flex-wrap:wrap;
      flex-direction: column;
      justify-content: center;
      border: 1px #666 solid;
   } 

   
   .table-row
   {
      display: flex;
      flex-direction: row;
      
   }
   
   </style>