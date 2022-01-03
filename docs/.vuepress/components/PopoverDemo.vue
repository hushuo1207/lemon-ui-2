<template>
<div style="padding-top: 16px;">
  <l-popover>
    <l-button>上方弹出</l-button>
    <template slot="content">
      <a href="https://github.com/hushuo1207/lemon-ui-2">这是个a链接</a>
    </template>
  </l-popover>
  <l-popover position="bottom">
    <l-button>下方弹出</l-button>
    <template slot="content">
     <strong style="color: #f2d091">加粗的提示</strong>
    </template>
  </l-popover>
  <l-popover position="left">
    <l-button>左边弹出</l-button>
    <template slot="content">
       普通文本内容
    </template>
  </l-popover>
  <l-popover position="right">
    <l-button>右边弹出</l-button>
    <template slot="content">
      普通文本内容
    </template>
  </l-popover>
</div>
</template>

<script>
import Button from '../../../src/Button.vue'
import Popover from "../../../src/Popover.vue"
    export default {
      name: 'PopoverDemo',
        components: {
          'l-button': Button,
          'l-popover': Popover,
        }
    }
</script>

<style>

</style>