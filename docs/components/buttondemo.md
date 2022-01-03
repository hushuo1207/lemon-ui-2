---
title: Button  按钮
---
# 按钮

## 基本用法：


<ButtonDemo></ButtonDemo>

## 示例代码：

``` html
<l-button>默认按钮</l-button>
<l-button icon="settings">左边</l-button>
<l-button icon="settings" iconPosition="right">右边</l-button>
<l-button :loading="true">加载中</l-button>
<l-button disabled>默认按钮</l-button>  
```

## 属性：  attributes


|     属性       |   说明    |  类型    |  可选值         |     默认值    |
|:--------------:|:-------:|:--------:|:--------------:|:-----------:|
|   icon         |设置内置的icon|String      | setting，info，left，right，download，loading, down |  --      |
| iconPositon    | 图标位置   |String   |    left、right |  left       |
| loading        | 加载状态   |String   |    true、false |  false      |


