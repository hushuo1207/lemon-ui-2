<template>
    <div class="collapse-demo">
      <l-collapse :selected.sync="selectedTab" single>
        <l-collapse-item title="标题1" name="1">内容1</l-collapse-item>
        <l-collapse-item title="标题2" name="2">内容2</l-collapse-item>
        <l-collapse-item title="标题3" name="3">内容3</l-collapse-item>
      </l-collapse>
    </div>
</template>

<script>
import Collapse from "../../../src/Collapse.vue"
import CollapseItem from "../../../src/CollapseItem.vue"
    export default {
      name: 'CollapseDemo',
        data() {
          return {
            selectedTab: ['2']
          }

        },
        components: {
          'l-collapse': Collapse,'l-collapse-item': CollapseItem
        }
    }
</script>

<style scoped>
.collapse-demo{
  margin: 12px;
  z-index: 20;
}
</style>