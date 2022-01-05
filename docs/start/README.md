---
title: 快速上手
---




## 引入必要资源

- 使用本框架前，请确保整个项目的 CSS 开启了 border-box

```CSS
*{box-sizing: border-box;}/*  *::before与*::after最好也开启 */
```


```js
import Vue from 'vue'
import {Button, plugin} from 'lemon-ui-demo'
import 'lemon-ui-demo/dist/index.css'
```
## 注册组件


```js
Vue.use(plugin)
export default {
  name: 'app',
  components: {
    'l-button': Button,
  }
}
```
## 具体使用及效果展示

<ClientOnly>
<ShowForYou></ShowForYou>
</ClientOnly>

```html
<l-button>默认按钮</l-button>
<l-button @click="$toast('你好呀')">默认弹出</l-button>
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

} from 'lemon-ui-demo'

Vue.component('l-button', Button)     //方法一 全局使用
Vue.component('l-button-group', ButtonGroup)

import {Button, ButtonGroup,} from ' lemon-ui-demo'

export default {           //方法二 当前组件引入使用  
  components: {            //按需引入需要的组件，以达到减小项目体积的目的。
    'l-button': Button,
  }
}

Vue.use(plugin)            //这是 toast 组件的使用方法、plugin 内部处理Toast组件
```
```html
<l-button @click="$toast('点击弹出提示')">默认上方</l-button>
```
