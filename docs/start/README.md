---
title:快速上手
---

# 快速上手

### npm 安装

```bash
npm install lemon-ui-demo
```

### 开始使用

1. 添加 CSS 样式

使用本框架前，请确保整个项目的 CSS 开启了 border-box

```CSS
*,*::before,*::after{box-sizing: border-box;}
```

IE 8及以上浏览器都支持此样式

2. 引入 lemon-ui-demo

按需引入需要的组件，以达到减小项目体积的目的。

需要注意的是，样式文件要记得引入。

```js
import {Button, ButtonGroup, Icon} from ' lemon-ui-demo'
import ' lemon-ui-demo/dist/index.css'

export default {
  name: 'app',
  components: {
    'l-button': Button,
    'l-icon': Icon
  }
}
```

**完整组件列表和引入方式**

```js
import Vue from 'vue'
import {
    Button, Icon, ButtonGroup,
    Input,
    Col, Row,
    Layout, Header, Footer, Sider, Content,
    Toast,   plugin,
    Tabs, TabsHead, TabsBody, TabsItem, TabsPane,
    Popover,
    Collapse, CollapseItem

} from 'ice-vue-ui'

Vue.component('l-button', Button)  //方法一 全局使用
Vue.component('l-icon', Icon)
Vue.component('l-button-group', ButtonGroup)

import {Button, ButtonGroup, Icon} from ' lemon-ui-demo'

export default {       //方法二 当前组件引入使用
  components: {
    'l-button': Button,'l-icon': Icon
  }
}



Vue.use(plugin)                     //这是 toast 组件的使用方法
```
```html
<l-button @click="$toast('点击弹出提示')">默认上方</l-button>
```
