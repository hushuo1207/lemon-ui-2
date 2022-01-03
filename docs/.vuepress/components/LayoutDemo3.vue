<template>
  <div style="padding-top: 16px;">

<l-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <l-sider style=" background:#f2e6c2; width:200px; color: black;">
    sider
  </l-sider>
  <l-layout>
    <l-header style="height: 50px; background:#f2d901;">
      header
    </l-header>
    <l-content style="height: 100px; background:#d9a714;">
      content
    </l-content>
    <l-footer style="height: 50px; background:#f2d901;">
      footer
    </l-footer>
  </l-layout>
</l-layout>
  </div>
</template>
<script>
import Header from "../../../src/Header.vue";
import Sider from "../../../src/Sider.vue";
import Content from "../../../src/Content.vue";
import Layout from "../../../src/Layout.vue";
import Footer from "../../../src/Footer.vue"
    export default {
      name: 'LayoutDemo3',
        components: {
          "l-header": Header,
          "l-footer": Footer,
          "l-sider": Sider,
          "l-content": Content,
          "l-layout": Layout
        }

    }
</script>
<style scoped>
* {
  box-sizing: border-box;
}
</style>