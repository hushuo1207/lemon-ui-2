<template>
<div class="show">
    
    <l-button>默认按钮</l-button>
    <l-button icon="settings">左边</l-button>
    <l-button icon="settings" icon-position="right">右边</l-button>
    <l-button :loading="true">加载中</l-button>
    <l-button disabled>默认按钮</l-button>
</div>
</template>

<script>
import Button from '../../../src/Button'

export default {
    name: 'ButtonDemo',
    components: {
        'l-button': Button,
        
    }
}
</script>
<style >

</style>