<template>
    <div>
        <l-button @click="$toast('点击弹出提示')">默认</l-button>
        <l-button @click="$toast('点击弹出提示', {position: 'center', autoClose: false})">中</l-button>
        <l-button @click="$toast('点击弹出提示', {position: 'top'})">上</l-button>
        <l-button @click="$toast('点击弹出提示', {position: 'bottom'})">下</l-button>
        <l-button @click="$toast('点击弹出提示', {position: 'left'})">左</l-button>
        <l-button @click="$toast('点击弹出提示', {position: 'right'})">右</l-button>

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
.wrapper{
    z-index: 20;
}
</style>