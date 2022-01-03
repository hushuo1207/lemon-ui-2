<template>
  <div style="padding-top: 16px;">
    <l-row class="demoRow" gutter="10">
      <l-col span="8">
        <div class="demoCol">8</div>
      </l-col>
      <l-col span="8" offset="8">
        <div class="demoCol">8</div>
      </l-col>
    </l-row>
    <l-row class="demoRow" gutter="10">
      <l-col span="6" offset="6">
        <div class="demoCol">6</div>
      </l-col>
      <l-col span="6" offset="6">
        <div class="demoCol">6</div>
      </l-col>
    </l-row>
    <l-row class="demoRow" gutter="10">
      <l-col span="4">
        <div class="demoCol">4</div>
      </l-col>
      <l-col span="4" offset="4">
        <div class="demoCol">4</div>
      </l-col>
      <l-col span="4" offset="8">
        <div class="demoCol">4</div>
      </l-col>
    </l-row>
    <l-row class="demoRow" gutter="10">
      <l-col span="2">
        <div class="demoCol">2</div>
      </l-col>
      <l-col span="2" offset="2">
        <div class="demoCol">2</div>
      </l-col>
      <l-col span="2">
        <div class="demoCol">2</div>
      </l-col>
      <l-col span="2" offset="2">
        <div class="demoCol">2</div>
      </l-col>
      <l-col span="2">
        <div class="demoCol">2</div>
      </l-col>
      <l-col span="2" offset="2">
        <div class="demoCol">2</div>
      </l-col>
      <l-col span="2">
        <div class="demoCol">2</div>
      </l-col>
      <l-col span="2" offset="2">
        <div class="demoCol">2</div>
      </l-col>
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

<style scoped>
* {
  box-sizing: border-box;
}
.demoRow{
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
