<script>
    import {mParamsStore, mColumsStore, count_row, current_page, step_paginations, showedColums}  from '../libs/store'

    let Columns = []

    mColumsStore.subscribe(() => {
        let mColums = []
        if ($mColumsStore.length == 0) {
            mColums = $showedColums
        } else {
            mColums = $mColumsStore
        }
        Columns = mColums.map((elem, ind) => {
            return {
                "name" : elem,
                "checked" : $showedColums.includes(elem)
            }
        })
        
        console.log(Columns)
    })

    function checkedColumn(e) {
        const mColumn = Columns.filter(val => val.checked).map(val => val.name)
        console.log(mColumn)
        showedColums.set(mColumn) 
    }
</script>

<article class="panel is-warning">
    <p class="panel-heading">
      Настройки
    </p>
    <p class="panel-tabs">
      <a class="is-active">Выбор колонок</a>
      <a>Настройка таблицы</a>
      <a>Private</a>
      <a>Sources</a>
      <a>Forks</a>
    </p>
    <div class="panel-block is-flex">
        <div class="box is-flex is-flex-direction-column">
            Отметте колонки которые будут отбображаться
            {#each Columns as column, id}
                <label class="checkbox">
                    <input type="checkbox" bind:checked={column.checked} on:change={checkedColumn}>
                    {id} {column.name}
                </label>
            {/each}

    </div>
    </div>

</article>