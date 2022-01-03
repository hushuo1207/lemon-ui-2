<template>
  <div style="padding-top: 16px;">
    <l-row class="demoRow" gutter="10">
      <l-col span="8">
        <div class="demoCol">8</div>
      </l-col>
      <l-col span="8">
        <div class="demoCol">8</div>
      </l-col>
      <l-col span="8">
        <div class="demoCol">8</div>
      </l-col>
    </l-row>
    <l-row class="demoRow" gutter="10">
      <l-col span="6">
        <div class="demoCol">6</div>
      </l-col>
      <l-col span="6">
        <div class="demoCol">6</div>
      </l-col>
      <l-col span="6">
        <div class="demoCol">6</div>
      </l-col>
      <l-col span="6">
        <div class="demoCol">6</div>
      </l-col>
    </l-row>
  </div>
</template>
<script>
import Row from '../../../src/row'
import Col from '../../../src/col'
export default {
  components:{
    'l-row':Row,
    'l-col':Col,
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