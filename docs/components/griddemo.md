---
title: Grid      栅格
---

# Grid 栅格

### 用法： 24 网格

预览

<ClientOnly>
<GridDemo></GridDemo>
</ClientOnly>

### 代码示例：

```html
<l-row class="demoRow">
  <l-col span="8"><div class="demoCol">8</div> </l-col>
  <l-col span="8"><div class="demoCol">8</div></l-col>
  <l-col span="8"><div class="demoCol">8</div> </l-col>
</l-row>
<l-row class="demoRow">
  <l-col span="6"><div class="demoCol">6</div></l-col>
  <l-col span="6"><div class="demoCol">6</div></l-col>
  <l-col span="6"><div class="demoCol">6</div></l-col>
  <l-col span="6"><div class="demoCol">6</div></l-col>
</l-row>
<l-row class="demoRow">
  <l-col span="4"><div class="demoCol">4</div></l-col>
  <l-col span="4"><div class="demoCol">4</div></l-col>
  <l-col span="4"><div class="demoCol">4</div></l-col>
  <l-col span="4"><div class="demoCol">4</div></l-col>
  <l-col span="4"><div class="demoCol">4</div></l-col>
  <l-col span="4"><div class="demoCol">4</div></l-col>
</l-row>
<l-row class="demoRow">
  <l-col span="2"><div class="demoCol">2</div></l-col>
  <l-col span="2"><div class="demoCol">2</div></l-col>
  <l-col span="2"><div class="demoCol">2</div></l-col>
  <l-col span="2"><div class="demoCol">2</div></l-col>
  <l-col span="2"><div class="demoCol">2</div></l-col>
  <l-col span="2"><div class="demoCol">2</div></l-col>
  <l-col span="2"><div class="demoCol">2</div></l-col>
  <l-col span="2"><div class="demoCol">2</div></l-col>
  <l-col span="2"><div class="demoCol">2</div></l-col>
  <l-col span="2"><div class="demoCol">2</div></l-col>
  <l-col span="2"><div class="demoCol">2</div></l-col>
  <l-col span="2"><div class="demoCol">2</div></l-col>
</l-row>
```

### 设置 gutter

#### 预览

<ClientOnly>
<GridDemo1></GridDemo1>
</ClientOnly>

#### 示例代码

```html
<l-row class="demoRow" gutter="10">
  <l-col span="8"><div class="demoCol">8</div></l-col>
  <l-col span="8"><div class="demoCol">8</div></l-col>
  <l-col span="8"><div class="demoCol">8</div></l-col>
</l-row>
<l-row class="demoRow" gutter="10">
  <l-col span="6"><div class="demoCol">6</div></l-col>
  <l-col span="6"><div class="demoCol">6</div></l-col>
  <l-col span="6"><div class="demoCol">6</div></l-col>
  <l-col span="6"><div class="demoCol">6</div></l-col>
</l-row>
```

### 设置空隙

#### 预览

<ClientOnly>
<GridDemo2></GridDemo2>
</ClientOnly>

#### 示例代码
```html
    <l-row class="demoRow" gutter="10">
      <l-col span="8">
        <div class="demoCol">8</div>
      </l-col>
      <l-col span="8" offset="8">
        <div class="demoCol">8</div>
      </l-col>
    </l-row>
    <l-row class="demoRow" gutter="10">
      <l-col span="6">
        <div class="demoCol">6</div>
      </l-col>
      <l-col span="6" offset="12">
        <div class="demoCol">6</div>
      </l-col>
    </l-row>
    <l-row class="demoRow" gutter="10">
      <l-col span="4">
        <div class="demoCol">4</div>
      </l-col>
      <l-col span="4" offset="16">
        <div class="demoCol">4</div>
      </l-col>
    </l-row>
    <l-row class="demoRow" gutter="10">
      <l-col span="2">
        <div class="demoCol">2</div>
      </l-col>
      <l-col span="2" offset="2">
        <div class="demoCol">2</div>
      </l-col>
      <l-col span="2">
        <div class="demoCol">2</div>
      </l-col>
      <l-col span="2">
        <div class="demoCol">2</div>
      </l-col>
      <l-col span="2">
        <div class="demoCol">2</div>
      </l-col>
      <l-col span="2">
        <div class="demoCol">2</div>
      </l-col>
      <l-col span="2">
        <div class="demoCol">2</div>
      </l-col>
      <l-col span="2">
        <div class="demoCol">2</div>
      </l-col>
      <l-col span="2">
        <div class="demoCol">2</div>
      </l-col>
      <l-col span="2" offset="2">
        <div class="demoCol">2</div>
      </l-col>
    </l-row>

```

## Attributes

### Row

|   参数   |   说明   |      类型      |       可选值        | 默认值 |
| :------: | :------: | :------------: | :-----------------: | :----: |
|  gutter  |   间距   | String、Number |         --          |   0    |
| position | 对齐方式 |     String     | left、center、right |  left  |

### Col

|   参数   |        说明        |      类型      |            可选值            | 默认值 |
| :------: | :----------------: | :------------: | :--------------------------: | :----: |
|   span   |   栅格占据的列数   | String、Number |             1-24             |   --   |
|  offset  | 栅格左侧的间隔格数 | String、Number |             1-24             |   --   |
|   ipad   |  ipad 响应式布局   | Number、Object | span 数字或{span:1;offset:1} |   --   |
| narrowPc |  窄屏幕响应式布局  | Number、Object | span 数字或{span:1;offset:1} |   --   |
|    pc    | 普通电脑响应式布局 | Number、Object | span 数字或{span:1;offset:1} |   --   |
|  widePc  |   宽屏响应式布局   | Number、Object | span 数字或{span:1;offset:1} |   --   |
