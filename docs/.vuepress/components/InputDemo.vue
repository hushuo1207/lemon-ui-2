<template>
  <div>
    <div class="easy">
      <l-input placeholder="请输入内容"></l-input>
      <l-input value="默认内容"></l-input>
      <l-input disabled value="默认内容"></l-input>
    </div>
    <div class="error">
      <l-input error="错误信息"></l-input>
    </div>
    <div class="bindDate">
      <l-input v-model="value"></l-input>
      <p>value: {{value}}</p>
    </div>
  </div>

</template>

<script>
import Input from "../../../src/Input.vue";
    export default {
      name: 'InputDemo',
        data(){
          return {
            value: '数据绑定'
          }
        },
        components: {
          'l-input': Input
        }
    
}
</script>

<style lang="scss" >
div.easy{
  margin-top: 10px;
  margin-bottom: 8px;
  > input{
    margin-top: 8px;
  }
}

div.bindDate{
  margin-top: 8px;
  height: 64px;
}
</style>