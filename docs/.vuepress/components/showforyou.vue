<template>
<div class="show">   
    <l-button>默认按钮</l-button>
    <l-button @click="$toast('你好呀')">默认弹出</l-button>
</div>
</template>

<script>

import Vue from "vue";
import Button from '../../../src/Button'
import Toast from "../../../src/Toast.vue"
import plugin from '../../../src/plugin.js'

Vue.use(plugin)

export default {
    name: 'ShowForYou',
    components: {
        'l-button': Button,
        
    }
}
</script>

<style>
.show{
    margin: 16px;
}
.wrapper{
    z-index: 20;
}
</style>