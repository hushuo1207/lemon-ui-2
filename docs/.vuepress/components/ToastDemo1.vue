<template>
  <div style="padding-top: 16px;">
    <div>
      <l-button @click="onClickButton">上方弹出</l-button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Button from '../../../src/Button'
import Toast from "../../../src/Toast.vue"
import plugin from '../../../src/plugin.js'

Vue.use(plugin)

export default {
  components: {'l-button':Button},
  methods: {
    onClickButton () {
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          }
        }
      })
    }
  },
}
</script>
<style>
.wrapper{
    z-index: 20;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}


</style>