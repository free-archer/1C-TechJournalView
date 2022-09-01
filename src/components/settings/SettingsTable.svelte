<script>
    import {columnWidth, step_paginations} from '../../libs/store'
</script>

<div class="panel-block is-flex">
    <div class="box is-fles">
    
        Отметте колонки которые будут отбображаться
        <input bind:value={$columnWidth} class="input is-info" type="text" placeholder="Info input">
        Отметте колонки которые будут отбображаться
        <input bind:value={$step_paginations} class="input is-info" type="text" placeholder="Info input">

    </div>
</div>
