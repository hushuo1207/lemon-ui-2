<template>
  <div style="margin-top: 10px">
    <div>
      <l-tabs :selected="selected1">
        <l-tabs-head>
          <l-tabs-item name="1">标题一</l-tabs-item>
          <l-tabs-item name="2">标题二</l-tabs-item>
        </l-tabs-head>
        <l-tabs-body>
          <l-tabs-pane name="1">内容1</l-tabs-pane>
          <l-tabs-pane name="2">内容2</l-tabs-pane>
        </l-tabs-body>
      </l-tabs>
    </div>

    <div style="margin-top: 20px">
      <l-tabs :selected="selected2">
        <l-tabs-head>
          <l-tabs-item name="1">标题一</l-tabs-item>
          <l-tabs-item disabled name="2">标题二</l-tabs-item>
          <l-tabs-item name="3">标题三</l-tabs-item>
        </l-tabs-head>
        <l-tabs-body>
          <l-tabs-pane name="1">内容1</l-tabs-pane>
          <l-tabs-pane name="2">内容2</l-tabs-pane>
          <l-tabs-pane name="3">内容3</l-tabs-pane>
        </l-tabs-body>
      </l-tabs>
    </div>
  </div>
</template>

<script>
import Tabs from "../../../src/Tabs.vue"
import TabsItem from "../../../src/TabsItem.vue"
import TabsHead from "../../../src/TabsHead.vue"
import TabsBody from "../../../src/TabsBody.vue"
import TabsPane from "../../../src/TabsPane.vue"
    export default {
      name: 'TabsDemo',
      data(){
        return {
          selected1: '1',
          selected2: '3'
        }
      },
        components: {
          'l-tabs': Tabs,
          'l-tabs-item': TabsItem,
          'l-tabs-head': TabsHead,
          'l-tabs-body': TabsBody,
          'l-tabs-pane': TabsPane,
        }
    }
</script>

<style>

</style>