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
import plugin from '../../../src/plugin.js'

Vue.use(plugin)

export default {
  components: {'l-button':Button},
  methods: {
    onClickButton () {
      this.$toast('<strong style="color:#f2d091;">加粗的提示</strong>', {
        enableHtml: true
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