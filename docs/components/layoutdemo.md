---
title: Layout    布局
---
# Layout 布局

**使用方法**

### 布局一

#### 预览
<ClientOnly>
<LayoutDemo></LayoutDemo>
</ClientOnly>

## 示例代码：

``` html
  <l-layout style="color: white; margin-bottom:50px;">
    <l-header style="height: 50px; background:#9E91F2;">
      header
    </l-header>
    <l-content style="height: 100px; background:#7B62D9;">
      content
    </l-content>
    <l-footer style="height: 50px; background:#9E91F2;">
      footer
    </l-footer>
  </l-layout>
```


### 布局二

#### 预览

<ClientOnly>
<LayoutDemo2></LayoutDemo2>
</ClientOnly>

#### 示例代码


``` html
<l-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <l-header style="height: 50px; background:#f2d901;">
    header
  </l-header>
  <l-layout>
    <l-sider style="height: 100px; background:#f2e6c2; width:200px; color: black;">
      sider
    </l-sider>
    <l-content style="height: 100px; background:#d9a714;">
      content
    </l-content>
  </l-layout>
  <l-footer style="height: 50px; background:#f2d901;">
    footer
  </l-footer>
</l-layout>
```

### 布局三

#### 预览

<ClientOnly>
<LayoutDemo3></LayoutDemo3>
</ClientOnly>

#### 示例代码


``` html
<l-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <l-sider style=" background:#f2e6c2; width:200px; color: black;">
    sider
  </l-sider>
  <l-layout>
    <l-header style="height: 50px; background:#f2d901;">
      header
    </l-header>
    <l-content style="height: 100px; background:#d9a714;">
      content
    </l-content>
    <l-footer style="height: 50px; background:#f2d901;">
      footer
    </l-footer>
  </l-layout>
</l-layout>
```
