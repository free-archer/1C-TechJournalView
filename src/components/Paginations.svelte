<script>
  import {step_paginations, current_page, count_row, Pages, mParamsStore} from '../libs/store'
  
  let arPages = []

  mParamsStore.subscribe(() => {
    arPages = []
    const pages = Math.ceil($count_row / $step_paginations)
    console.log(`Страниц: ${pages}`)
    
    for(let i=1; i<=pages; i++) {
      arPages.push(i*$step_paginations)
    }
    $Pages = arPages
  })

  function changePage(elem) {
    $current_page = elem.target.attributes.id.value
    console.log($current_page)
  }
</script>

<nav class="pagination is-small" role="navigation" aria-label="pagination">
    <a class="pagination-previous is-disabled" title="This is the first page">Previous</a>
    <a class="pagination-next">Next page</a>
    <ul class="pagination-list">

      {#each arPages as page}
      <li>
          <a on:click={changePage} 
          class="pagination-link {($current_page==page) ? "is-current" : ""}" 
          id="{page}" aria-label="{page}" aria-current="page">{page}
        </a>
      </li>
      {/each}

    </ul>
</nav>