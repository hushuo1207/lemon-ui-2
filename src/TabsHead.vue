<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LemonTabsHead",
        inject: ['eventBus'],
        mounted () {
            // this.$emit('update:selected', 'tabs-head 抛出的数据')
            this.eventBus.$on('update:selected', (item, vm) => {
                let {width, height, top, left} = vm.$el.getBoundingClientRect()
                // console.log(left);
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${vm.$el.offsetLeft}px`
                //qubie
            })
        }
    }
</script>

<style lang="scss" scoped>
 $tab-height: 40px;
 $blue: blue;
 $border-color: #ddd;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    border-bottom: 1px solid $border-color;

    // border: 1px solid red;
    position: relative;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue; 
    //   width: 100px;
      transition: all 300ms;
    }
    > .actions-wrapper {
      margin-left: auto;
      //flex 最后一个设置此属性可以在最右边
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>