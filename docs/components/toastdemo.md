---
title: Toast - 弹出提示框
---
# Toast 文字提示

**使用方法**


#### 预览

<ClientOnly>
<ToastDemo></ToastDemo>
</ClientOnly>

#### 示例代码

``` html
<l-button @click="$toast('点击弹出提示')">默认上方</l-button>
<l-button @click="$toast('点击弹出提示', {position: 'center'})">中间弹出</l-button>
<l-button @click="$toast('点击弹出提示', {position: 'top'})">上方弹出</l-button>
<l-button @click="$toast('点击弹出提示', {position: 'bottom'})">下方弹出</l-button>
<l-button @click="$toast('点击弹出提示', {position: 'left'})">左边弹出</l-button>
<l-button @click="$toast('点击弹出提示', {position: 'right'})">右边弹出</l-button>
```
### this.$toast

想要使用 Toast 组件，首先需要引入该组件,然后使用 Vue 官方文档中插件的使用方法使用该插件。
代码
```js
import Vue from "vue";
import Button from '../../../src/Button'
import Toast from "../../../src/Toast.vue"
import plugin from '../../../src/plugin.js'

Vue.use(plugin)

export default {
    components: {
        'l-button': Button, 'l-toast': Toast
    }
}
```

### 设置关闭按钮

#### 预览

<ClientOnly>
<ToastDemo1></ToastDemo1>
</ClientOnly>

#### 示例代码

```vue
<template>
    <div>
      <l-button @click="onClickButton">上方弹出</l-button>
    </div>
</template>
<script>
export default {
methods: {
    onClickButton () {
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          }
        }
      })
    }
  },
}
</script>
```

### 支持传入 HTML

#### 预览

<ClientOnly>
<ToastDemo2></ToastDemo2>
</ClientOnly>

#### 示例代码

```vue
<template>
    <div>
      <l-button @click="onClickButton">上方弹出</l-button>
    </div>
</template>
<script>
export default {
  methods: {
    onClickButton () {
      this.$toast('<strong style="color:#f2d091;">加粗的提示</strong>', {
        enableHtml: true
      })
    }
  },
}
</script>
```


# options
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| message | 显示内容，函数第一个参数 |    String | --| --|
| object | 函数接受的第二个参数 |    String | autoClose, closeButton, enableHtml, position| --|
| position | 设置位置 |    String | top、center、bottom、left、right| middle|
|autoClose|是否自动关闭|Boolean|true、false|true|
| closeButton | 设置关闭按钮      |  Object |--| {message:'关闭', callback:undefined}
|enableHtml|是否支持html内容|Boolean|true、false|false|