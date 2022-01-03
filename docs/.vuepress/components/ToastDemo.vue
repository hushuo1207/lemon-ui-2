<template>
<div class="toastdemo1">
    <l-button @click="$toast('点击弹出提示')">默认上方</l-button>
    <l-button @click="$toast('点击弹出提示', {position: 'center'})">中间弹出</l-button>
    <l-button @click="$toast('点击弹出提示', {position: 'top'})">上方弹出</l-button>
    <l-button @click="$toast('点击弹出提示', {position: 'bottom'})">下方弹出</l-button>
    <l-button @click="$toast('点击弹出提示', {position: 'left'})">左边弹出</l-button>
    <l-button @click="$toast('点击弹出提示', {position: 'right'})">右边弹出</l-button>
    </div>
</template>

<script>
import Vue from "vue";
import Button from '../../../src/Button'
import Toast from "../../../src/Toast.vue"
import plugin from '../../../src/plugin.js'

Vue.use(plugin)
    export default {
      name: 'ToastDemo',
        components: {
            'l-button': Button,
            'l-toast': Toast
        }
    }
</script>

<style>
* {
  box-sizing: border-box;
}

.wrapper{
    z-index: 20;
}
.toastdemo1{
    margin: 12px;
}
</style>