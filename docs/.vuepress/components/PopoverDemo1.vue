<template>
  <div style="padding-top: 16px;">

    <l-popover trigger="hover">
      <l-button>上方弹出</l-button>
      <template slot="content">
        弹出内容
      </template>
    </l-popover>
    <l-popover position="bottom" trigger="hover">
      <l-button>下方弹出</l-button>
      <template slot="content">
        弹出内容
      </template>
    </l-popover>
    <l-popover position="left" trigger="hover">
      <l-button>左边弹出</l-button>
      <template slot="content">
        弹出内容
      </template>
    </l-popover>
    <l-popover position="right" trigger="hover">
      <l-button>右边弹出</l-button>
      <template slot="content">
        弹出内容
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