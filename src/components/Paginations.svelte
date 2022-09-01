<script>
  import {step_paginations, current_page, count_row, Pages, mParamsStore} from '../libs/store'
  
  let arPages = []

  mParamsStore.subscribe(() => {
    calcPagination()
  })

  current_page.subscribe(() => {
    calcPagination()
  })

  function calcPagination() {
    arPages = []

    console.log(`Страниц: ${$count_row / $step_paginations}`)
    
    const step = Math.ceil($step_paginations/2)*$step_paginations
    let start = ($current_page > step) ? $current_page - step : $step_paginations
    let stop = $current_page + step
    let has_miss = false
    for(let i=start; i<=$count_row ; i += $step_paginations) {
      if (i <= stop || i >= $count_row - step) {
        arPages.push(i)
      } else if (!has_miss) {
        arPages.push(-1)
        has_miss = true
      }
    }

    if (arPages[arPages.length-1] < $count_row ) {
      arPages.push(arPages[arPages.length-1]+$step_paginations)
    }

    $Pages = arPages    
  }

  function changePage(elem) {
    $current_page = +elem.target.attributes.id.value
    console.log($current_page)
  }

  function nextPage() {
    $current_page = $current_page+$step_paginations
    console.log($current_page)
  }
</script>

<nav class="pagination is-small" role="navigation" aria-label="pagination">
    <a class="pagination-previous is-disabled" title="This is the first page">Previous</a>
    <a on:click={nextPage} class="pagination-next">Next page</a>
    <ul class="pagination-list">

      {#each arPages as page}

      {#if page === -1}
        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
      {:else}
        <li>
            <a on:click={changePage} 
            class="pagination-link {($current_page==page) ? "is-current" : ""}" 
            id="{page}" aria-label="{page}" aria-current="page">{page}
          </a>
        </li>
      {/if}

      {/each}

    </ul>
</nav>