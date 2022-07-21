<template>
<div >
    <l-button class="show">默认按钮</l-button>
    <l-button class="show" icon="settings">左边</l-button>
    <l-button class="show" icon="settings" icon-position="right">右边</l-button>
    <l-button class="show" :loading="loading" @click="loading=!loading">加载中</l-button>
    <l-button class="show" disabled>默认按钮</l-button>
</div>
</template>

<script>
import Button from '../../../src/Button'

export default {
    name: 'ButtonDemo',
    components: {
        'l-button': Button,
        
    },
    data(){
        return {loading: true,}
    }
}
</script>
<style scoped>
.show{
    margin: 4px;
}
</style>