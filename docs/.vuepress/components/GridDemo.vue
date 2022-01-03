<template>
    <div>
      <l-row gutter="20">
        <l-col span="24"
          :ipad="{span:8}"
          :narrow-pc="{span:4}"
          :pc="{span:2}"
          :wide-pc="{span:1}"
        >
          1
        </l-col>
        <l-col span="24"
          :ipad="{span:16}"
          :narrow-pc="{span:20}"
          :pc="{span:22}"
          :wide-pc="{span:23}"
        >11
        </l-col>
      </l-row>
      <l-row gutter="20">
        <l-col span="2">111</l-col>
        <l-col span="20" offset="2">111</l-col>
      </l-row>
      <l-row gutter="20">
        <l-col>111</l-col>
        <l-col>111</l-col>
      </l-row>
      <l-row gutter="20">
        <l-col>111</l-col>
        <l-col>111</l-col>
        <l-col>111</l-col>
        
      </l-row>
      <l-row gutter="20">
        <l-col>111</l-col>
        <l-col>111</l-col>
        <l-col>111</l-col>
        <l-col>111</l-col>
        
      </l-row>
      <l-row gutter="20">
        <l-col span="2">111</l-col>
        <l-col span="20" offset="2">111</l-col>
      </l-row>
      <l-row gutter="20">
        <l-col span="4">111</l-col>
        <l-col span="20">111</l-col>
      </l-row>
      <l-row gutter="20">
        <l-col span="4">111</l-col>
        <l-col span="8" offset="2">111</l-col>
        <l-col span="8" offset="2">111</l-col>
      </l-row>
      <l-row gutter="20">
        <l-col span="6">111</l-col>
        <l-col span="6" offset="2">111</l-col>
        <l-col span="6" offset="4">111</l-col>
      </l-row>
      <l-row gutter="20">
        <l-col span="8">111</l-col>
        <l-col span="16">111</l-col>
        
      </l-row>
    </div>
</template>

<script>
import Row from "../../../src/Row.vue";
import Col from "../../../src/Col.vue";
    export default {
      name: 'GridDemo',
        components: {
          'l-row': Row,'l-col': Col
        }
    }
</script>

<style>

</style>