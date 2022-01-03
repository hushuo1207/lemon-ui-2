<template>
<div class="show">
    
    <l-button>默认按钮</l-button>
    <l-button icon="settings">左边</l-button>
    <l-button icon="settings" icon-position="right">右边</l-button>
    <l-button :loading="true">加载中</l-button>
    <l-button disabled>默认按钮</l-button>
    <l-button-group>
        <l-button icon="left">上一页</l-button>
            <l-button> 按钮 </l-button>
            <l-button icon = "right" icon-position="right">下一页</l-button>
    </l-button-group>
</div>
</template>

<script>
import Button from '../../../src/Button'
import ButtonGroup from "../../../src/ButtonGroup.vue";

export default {
    name: 'ButtonDemo',
    components: {
        'l-button': Button,
        'l-button-group': ButtonGroup,
        
    }
}
</script>
<style >
.show{
    z-index: 1;
}
</style>