---
title: Popover   弹出框
---

# Popover 弹出框

**使用方法**

### 支持 HTML

#### 预览

<ClientOnly>
<PopoverDemo></PopoverDemo>
</ClientOnly>

#### 示例代码

```html

<div style="padding-top: 16px;">
  <l-popover>
    <l-button>上方弹出</l-button>
    <template slot="content">
      <a href="https://github.com/hushuo1207/lemon-ui-2">这是个a链接</a>
    </template>
  </l-popover>
  <l-popover position="bottom">
    <l-button>下方弹出</l-button>
    <template slot="content">
      <strong style="color: #f2d091">加粗的提示</strong>
    </template>
  </l-popover>
  <l-popover position="left">
    <l-button>左边弹出</l-button>
    <template slot="content">
      普通文本内容
    </template>
  </l-popover>
  <l-popover position="right">
    <l-button>右边弹出</l-button>
    <template slot="content">
      普通文本内容
    </template>
  </l-popover>
</div>

```

### 支持 hover 触发

#### 预览

<ClientOnly>
<PopoverDemo1></PopoverDemo1>
</ClientOnly>

#### 示例代码

```html
<div style="padding-top: 16px;">
<l-popover trigger="hover">
  <l-button>上方弹出</l-button>
  <template slot="content">
    弹出内容
  </template>
</l-popover>
<l-popover position="bottom" trigger="hover">
  <l-button>下方弹出</l-button>
  <template slot="content">
    弹出内容
  </template>
</l-popover>
<l-popover position="left" trigger="hover">
  <l-button>左边弹出</l-button>
  <template slot="content">
    弹出内容
  </template>
</l-popover>
<l-popover position="right" trigger="hover">
  <l-button>右边弹出</l-button>
  <template slot="content">
    弹出内容
  </template>
</l-popover>
</div>
```

# Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|position| 设置弹出框相对触发区域的位置 | String |left、right、top、bottom| top
|trigger| 设置触发模式 | String |click、hover|click