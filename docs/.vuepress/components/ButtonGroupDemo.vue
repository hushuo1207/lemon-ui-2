<template>
    <l-button-group>
        <l-button icon="left" @click="before">上一页</l-button>
            <l-button> 按钮1 </l-button>
            <l-button> 按钮2 </l-button>
            <l-button icon = "right" icon-position="right" @click="next">下一页</l-button>
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
    },
    methods: {
        before() {
            history.go(-1)
        },
        next() {
            location.href = "./tabsdemo.html"
        }
    }
}
</script>
<style >

</style>