<script>
  export let paramValue;
  export let isHeder=false;
</script>


<div class="table-cell p-1 {isHeder ? 'row-heder ' : ''}">
  {paramValue}
</div>


<style>
.table-cell
  {
     /* display: table-cell; */
     display: block;
     width: 80px;
     word-wrap: break-word;
     border: 1px #666 solid;
  }

  .row-heder {
        /* border: 2px #333 solid; */
        background: #999;
        text-align: center;
      }  
</style>