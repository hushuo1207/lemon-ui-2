---
title: Button - 按钮
---

# Button 按钮

### 基本用法：

预览

<ClientOnly>
<ButtonDemo></ButtonDemo>
</ClientOnly>

### 代码示例：

``` html
<l-button>默认按钮</l-button>
<l-button icon="settings">左边</l-button>
<l-button icon="settings" iconPosition="right">右边</l-button>
<l-button :loading="true">加载中</l-button>
<l-button disabled>默认按钮</l-button>  
```

### Attributes


|     属性       |   说明    |  类型    |  可选值         |  默认  |
|:--------------:|:-------:|:--------:|:--------------:|:-----------:|
|   icon         |设置内置的icon|String      | setting，info，left，right，download，loading, down |  --    |
| iconPositon    | 图标位置   |String   |    left、right |  left       |
| loading        | 加载状态   |String   |    true、false |  false      |



### 进阶用法：

**buttongroup效果预览：** 可以将上述button组合起来用

<ClientOnly>
<ButtonGroupDemo></ButtonGroupDemo>
</ClientOnly>

### 代码示例：

``` html
  <l-button-group>
    <l-button icon="left">上一页</l-button>
    <l-button> 按钮1 </l-button>
    <l-button> 按钮2 </l-button>
    <l-button icon = "right" icon-position="right">下一页</l-button>
  </l-button-group>
```
