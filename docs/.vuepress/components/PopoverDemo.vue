<template>
    <div>
        <l-popover>
          <template slot="content" slot-scope="{close}">
            <div>popover内容</div>
            <div><a href="https://baidu.com">百度</a></div>
            <div><button @click="close">小调皮</button></div>
          </template>
          <button>点我</button>
        </l-popover>
        <l-popover position="bottom">
          <template slot="content">
            <div>
              popoveraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </div>
          </template>
          <button>Click me</button>
        </l-popover>
        <l-popover position="left">
          <template slot="content">
            <div>popover内容</div>
          </template>
          <button>点我</button>
        </l-popover>
        <l-popover position="right">
          <template slot="content">
            <div>
              popoveraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </div>
          </template>
          <button>Click me</button>
        </l-popover>
        <l-popover trigger="hover">
          <template slot="content">
            <div>popover内容</div>
          </template>
          <button>点我</button>
        </l-popover>
        <l-popover position="bottom" trigger="hover">
          <template slot="content">
            <div>
              popoveraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </div>
          </template>
          <button>Click me</button>
        </l-popover>
        <l-popover position="left" trigger="hover">
          <template slot="content">
            <div>popover内容</div>
          </template>
          <button>点我</button>
        </l-popover>
        <l-popover position="right" trigger="hover">
          <template slot="content">
            <div>
              popoveraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </div>
          </template>
          <button>Click me</button>
        </l-popover>
    </div>
</template>

<script>
import Popover from "../../../src/Popover.vue"
    export default {
      name: 'PopoverDemo',
        components: {
          'l-popover': Popover
        }
    }
</script>

<style>

</style>