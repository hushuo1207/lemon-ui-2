---
title: Popover   弹出框
---
# 按钮

## 基本用法：


<PopoverDemo></PopoverDemo>

## 示例代码：

``` html
<g-button>默认按钮</g-button>
<g-button icon="settings">左边</g-button>
<g-button icon="settings" iconPosition="right">右边</g-button>
<g-button :loading="true">加载中</g-button>
<g-button disabled>默认按钮</g-button>  
```

## 属性：  attributes


|     属性       |   说明    |  类型    |  可选值         |     默认值    |
|:--------------:|:-------:|:--------:|:--------------:|:-----------:|
|   icon         |设置内置的icon|String      | setting，info，left，right，download，loading, down |  --      |
| iconPositon    | 图标位置   |String   |    left、right |  left       |
| loading        | 加载状态   |String   |    true、false |  false      |


