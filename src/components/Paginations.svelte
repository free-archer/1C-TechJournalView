<script>
  import {step_paginations, current_page, count_row} from '../libs/store'
  import { onMount, beforeUpdate } from 'svelte';

  const arPages = []

  onMount(() => {
    console.log("onMount")
    const pages = Math.ceil($count_row / $step_paginations)
    console.log(`Страниц: ${pages}`)
    
    for(let i=1; i<=pages; i++) {
      arPages.push(i*$step_paginations)
    }
    console.log(arPages)
  })

  // beforeUpdate(() => {
  //   console.log("beforeUpdate")
  //   const pages = Math.ceil($count_row / $step_paginations)
  //   console.log(`Страниц: ${pages}`)
    
  //   for(let i=1; i<=pages; i++) {
  //     arPages.push(i*$step_paginations)
  //   }
  //   console.log(arPages)
  // })

  

  function changePage(elem) {
    $current_page = elem.target.attributes.id.value
    console.log($current_page)
  }
</script>

<p>
  arPages: {arPages.toString()}
</p>
<nav class="pagination is-small" role="navigation" aria-label="pagination">
    <a class="pagination-previous is-disabled" title="This is the first page">Previous</a>
    <a class="pagination-next">Next page</a>
    <ul class="pagination-list">

      {#each arPages as page}
      <li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a on:click={changePage} 
          class="pagination-link {($current_page==page) ? "is-current" : ""}" 
          id="{page}" aria-label="{page}" aria-current="page">{page}
        </a>
      </li>
      {/each}

    </ul>
</nav>