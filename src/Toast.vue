<template>
<div class="wrapper" :class="toastClasses">
  <div class="toast" ref="toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</div>
</template>
<script>
  //构造组件的选项
  export default {
    name: 'LemonToast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 50
      },
      closeButton: {
        type: Object,
        default () {
          return {
            text: '关闭', callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
          
        type: String,
        default: 'top',
        validator (value) {
            return ['top', 'bottom', 'left', 'right','center'].indexOf(value) >= 0
        }
      }
    },
    created () {
    },
    computed:{
        toastClasses(){
             return { [`position-${this.position}`]: true}
        }
        
    },
    mounted () {
      this.updateStyles()
      this.execAutoClose()
    },
    methods: {
      updateStyles () {
        this.$nextTick(() => {
          this.$refs.line.style.height =
            `${this.$refs.toast.getBoundingClientRect().height}px`
            //提示的字数太多时，提升高度，但是那条线获取不到
            //那条线的高度等于父元素的高度；瞬间为0，马上获取不到，
            //this.$nextTick? 有用下一次事件队列拿到
        })
      },
      execAutoClose () {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      close () {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      },
      log () {
        console.log('测试')
      },
      onClickClose () {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this)//this === toast实例
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  @keyframes slide-up {
    0% {opacity: 0; transform: translateY(100%);}
    100% {opacity: 1;transform: translateY(0%);}
  }
  @keyframes slide-down {
    0% {opacity: 0; transform: translateY(-100%);}
    100% {opacity: 1;transform: translateY(0%);}
  }
  @keyframes fade-in {
    0% {opacity: 0; }
    100% {opacity: 1;}
  }
  @keyframes fade-left {
    0% {opacity: 0; transform: translateX(-100%);}
    100% {opacity: 1; transform: translateX(0%);}
  }
  @keyframes fade-right {
    0% {opacity: 0; transform: translateX(100%);}
    100% {opacity: 1; transform: translateX(0%);}
  }
  .wrapper {
    position: fixed;
    
    transform: translateX(-50%);
    $animation-duration: 300ms;
    &.position-top {
      left: 50%;
      top: 0;
      .toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $animation-duration;
      }
    }
    &.position-bottom {
      left: 50%;
      bottom: 0;
      .toast {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up $animation-duration;
      }
    }
    &.position-center {
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      .toast {
        animation: fade-in $animation-duration;
      }
    }
    &.position-left{
      top: 50%;
      left: 0; 
      .toast {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        animation: fade-left $animation-duration;
      }
      transform: translateY(-50%); 

    }
    &.position-right{
      right: 0; 
      top: 50%;
      .toast {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        animation: fade-right $animation-duration;
      }
      transform: translateY(-50%); 

    }
  }
  .toast {
    font-size: $font-size; min-height: $toast-min-height; line-height: 1.8;
    // top: 0; left: 50%; 
    // transform: translateX(-50%); 
    display: flex;
    color: white; align-items: center; background: $toast-bg; border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50); 
    padding: 0 16px;
    .message {
      padding: 8px 0;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
    }
    .line {
      height: 100%;
      border-left: 1px solid #666;
      margin-left: 16px;
    }
    // &.position-top{
    //   top: 0;
    //   // transform: translateX(-50%); 
    //   // animation: fade-in 1s;

    // }
    // &.position-bottom{
    //   bottom: 0;
    //   //  left: 50%; 
    //   // transform: translateX(-50%);
    //   // animation: fade-up 1s;

    // }
    // &.position-center{
    //   top: 50%;
    //   // left: 50%; 
    //   // transform: translate(-50%, -50%); 
    //   // animation: fade 1s;
    // }
    // &.position-left{
    //   top: 50%;
    //   left: 0; 
    //   transform: translateY(-50%); 
    // }
    // &.position-right{
    //   right: 0; 
    //   top: 50%;
      
    //   transform: translateY(-50%); 
    // }
  }
</style>