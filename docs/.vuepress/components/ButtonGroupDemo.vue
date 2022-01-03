<template>
    <l-button-group>
        <l-button icon="left">上一页</l-button>
            <l-button> 按钮1 </l-button>
            <l-button> 按钮2 </l-button>
            <l-button icon = "right" icon-position="right">下一页</l-button>
    </l-button-group>
</template>

<script>
import Button from '../../../src/Button'
import ButtonGroup from "../../../src/ButtonGroup.vue";

export default {
    name: 'ButtonGroupDemo',
    components: {
        'l-button': Button,
        'l-button-group': ButtonGroup,
        
    }
}
</script>
<style >

</style>