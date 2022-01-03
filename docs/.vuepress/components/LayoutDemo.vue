<template>
    <div>
      <l-layout style="height: 100vh;">
        <l-sider class="demo">sider</l-sider>
        <l-layout>
          <l-header class="demo">header</l-header>
          <l-content class="demo">content</l-content>
          <l-footer class="demo">footer</l-footer>
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
      name: 'LayoutDemo',
        components: {
          "l-header": Header,
          "l-footer": Footer,
          "l-sider": Sider,
          "l-content": Content,
          "l-layout": Layout
        }

    }
</script>

<style>

</style>