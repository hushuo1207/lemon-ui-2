<template>
      <div class="box">
        <l-input value="李四" readonly></l-input>
        <l-input value="王五" placeholder="请输入内容"></l-input>
        <l-input value="赵"></l-input>
        <l-input value="赵" error = "姓名不能少于两个字"></l-input>

        <l-input value="张三" v-model="message"></l-input>
        message:{{message}}
      </div>
</template>

<script>
import Input from "../../../src/Input.vue";
    export default {
      name: 'InputDemo',
        data(){
          return {
            message: '数据绑定'
          }
        },
        components: {
          'l-input': Input
        }
    
}
</script>

<style>

</style>