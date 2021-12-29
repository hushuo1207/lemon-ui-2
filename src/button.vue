<template>
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: true }">
    <g-icon v-if="icon" :name = "icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
// import Icon from "./Icon.vue";
export default {
    name: "Button",
    props: {
        icon: {},
        iconPosition: {
            type: String,
            default: "left",
            validator(value) {
                //判断输入的方向不是左右后的处理方法
                console.log(value);
                return !(value !== "left" && value !== "right");
            },
        },
    },
    // components: { Icon }
};
</script>

<style lang="scss">
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-self: center;
  align-items: center;
    vertical-align: middle;//上下不对齐可以添加此属性
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .g-icon {
    order: 1;
    margin-right: 0.3em;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .g-icon {
      order: 2;
      margin-left: 0.3em;
    }
  }
  //   &-left {
  //     > .content {
  //       order: 2;
  //     }
  //     > .icon {
  //       order: 1;
  //     }
  //   }
}
</style>
