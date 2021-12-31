<template>
  <button @click="$emit('click')" class="g-button" :class="{ [`icon-${iconPosition}`]: true }">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  name: "gbutton",
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    }, 
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        //判断输入的方向不是左右后的处理方法
        // console.log(value);
        return !(value !== "left" && value !== "right");
      }, 
    },
  },
  components: { 'g-icon': Icon }
};
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
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
  vertical-align: middle; //上下不对齐可以添加此属性
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
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 0.3em;
    }
  }
  .loading {
    animation: spin 1s infinite linear;
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
