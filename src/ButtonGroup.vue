<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LemonButtonGroup",
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(
          `g-button-group的子元素应该全是g-button 但是你写的是${name}`
        );
      }
    }
  },
};
</script>

<style lang="scss">
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
.g-button-group {
  display: inline-flex;
  vertical-align: middle; //上下不对齐可以添加此属性
  > .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
      //问题： 在最左边时会有1px位移  TODO
      //   &:not(:first-child){
      //     border-left: none;边框颜色会缺失
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
