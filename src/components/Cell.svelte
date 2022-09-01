<script>
  import {columnWidth, showedColums} from '../libs/store'

  export let paramValue;
  export let isHeder=false;

  console.log($columnWidth)

  let styleCell;
  columnWidth.subscribe(() => {
    styleCell = "width:"+$columnWidth+"px"
  })

</script>


<div class="table-cell p-1 {isHeder ? 'row-heder ' : ''}" style={styleCell}>
  {paramValue}
</div>


<style>
.table-cell
  {
     /* display: table-cell; */
     display: block;
     word-wrap: break-word;
     border: 1px #666 solid;
  }

  .row-heder {
        /* border: 2px #333 solid; */
        background: #999;
        text-align: center;
      }  
</style>