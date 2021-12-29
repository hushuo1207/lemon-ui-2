<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  naem: "ButtonGroup",
};
</script>

<style lang="scss">
.g-button-group {
  display: inline-flex;
  vertical-align: middle; //上下不对齐可以添加此属性
  > .g-button{
      border-radius: 0;
      margin-left: -1px;
      //问题： 在最左边时会有1px位移
    //   &:not(:first-child){
    //     border-left: none;边框颜色会缺失
    //     }
      &:first-child{
          border-top-left-radius: var(--border-radius);
          border-bottom-left-radius: var(--border-radius);
      }
      &:last-child{
          border-top-right-radius: var(--border-radius);
          border-bottom-right-radius: var(--border-radius);
      }
      &:hover{

      }
  }
}
</style>
