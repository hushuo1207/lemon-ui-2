---
title: collapse  按钮
---
# 按钮

## 基本用法：


<CollapseDemo></CollapseDemo>

## 示例代码：

``` html
<g-button>默认按钮</g-button>
<g-button icon="settings">左边</g-button>
<g-button icon="settings" iconPosition="right">右边</g-button>
<g-button :loading="true">加载中</g-button>
<g-button disabled>默认按钮</g-button>  
```


## Attributes

### Collapse 
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|selected| 选中项 | Array |--|[]|
| single | 是否单一展示 |    boolean | true、false|false

### CollapseItem
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|title| 标题 | String |--|--|
| name | 唯一标识，必填 |    String |-- |--|


