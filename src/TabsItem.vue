<template>
 <div class="tabs-item" @click="xxx" :class="classes">
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
          active: this.active
        }
      }
    },
    created () {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    },
    methods: {
      xxx () {
        this.eventBus.$emit('update:selected', this.name)
      }
    }
}
</script>

<style lang="scss" scoped>
 .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    border: 1px solid green;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
       background: red;
    //border-bottom: 1px solid red;

    }
  }
</style>