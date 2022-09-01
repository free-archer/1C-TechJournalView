<script>
    import {columnWidth, step_paginations} from '../../libs/store'

    function updateColumnWidth() {

    }

    step_paginations.subscribe(() => {
        $step_paginations = +$step_paginations
    })
</script>

<div class="panel-block is-flex">
    <div class="box is-fles">
    
        Ширина столбцов
        <input bind:value={$columnWidth} class="input is-info" type="text" placeholder="Info input">

        Шаг пагинации
        <input bind:value={$step_paginations} class="input is-info" type="text" placeholder="Info input">

    </div>
</div>
