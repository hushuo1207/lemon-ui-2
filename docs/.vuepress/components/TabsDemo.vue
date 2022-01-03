<template>
    <div>
      <l-tabs :selected.sync="selectedTab">
        <l-tabs-head>
          <template slot="actions">
            <button>设置</button>
          </template>
          <l-tabs-item name="woman">
            <l-icon name="settings"></l-icon>美女
          </l-tabs-item>
          <l-tabs-item name="finance" disabled>
            财经
          </l-tabs-item>
          <l-tabs-item name="sports">
            体育
          </l-tabs-item>
        </l-tabs-head>
        <l-tabs-body>
          <l-tabs-pane name="woman">
            美女相关资讯
          </l-tabs-pane>
          <l-tabs-pane name="finance">
            财经相关资讯
          </l-tabs-pane>
          <l-tabs-pane name="sports">
            体育相关资讯
          </l-tabs-pane>
        </l-tabs-body>
      </l-tabs>
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
          selectedTab: 'sports'
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