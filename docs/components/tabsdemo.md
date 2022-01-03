---
title: Tabs    标签页
---

# Tabs 标签页

### 基本用法：

预览

<ClientOnly>
<TabsDemo></TabsDemo>
</ClientOnly>

### 代码示例：

```html
<l-tabs :selected="3">
  <l-tabs-head>
    <l-tabs-item name="1">标题一</l-tabs-item>
    <l-tabs-item disabled name="2">标题二</l-tabs-item>
    <l-tabs-item name="3">标题三</l-tabs-item>
  </l-tabs-head>
  <l-tabs-body>
    <l-tabs-pane name="1">内容1</l-tabs-pane>
    <l-tabs-pane name="2">内容2</l-tabs-pane>
    <l-tabs-pane name="3">内容3</l-tabs-pane>
  </l-tabs-body>
</l-tabs>
```

## Attributes

### Tabs

|   参数   |   说明   |  类型  | 可选值 | 默认值 |
| :------: | :------: | :----: | :----: | :----: |
| selected | 当前选中 | String |  name  |   --   |

### TabsHead and TabsItem

|   参数   |      说明      |  类型   |   可选值    | 默认值 |
| :------: | :------------: | :-----: | :---------: | :----: |
|   name   | 唯一标识，必选 | String  |     --      |   --   |
| disabled |  设置是否禁用  | Boolean | true、false | false  |

### TabsBody and TabsPane

| 参数 |      说明      |  类型  | 可选值 | 默认值 |
| :--: | :------------: | :----: | :----: | :----: |
| name | 唯一标识，必选 | String |   --   |   --   |
