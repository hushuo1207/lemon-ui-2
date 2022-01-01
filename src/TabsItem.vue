<template>
 <div class="tabs-item" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: "LemonTabsItem",
    inject: ['eventBus'],
    data () {
      return {
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: [String, Number],
        required: true
        //default: ''
      }
    },
    computed: {
      classes () {
        return {
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    created () {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    },
    methods: {
      onClick () {
        if (this.disabled) { return }
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
}
</script>

<style lang="scss" scoped>
$blue: blue;
$disabled-text-color: grey;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    // border: 1px solid green;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: $blue;
      font-weight: bold;

    }
    &.disabled {
      color: $disabled-text-color;
    }
  }
</style>