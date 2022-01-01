<template>
    <div class="tabs">
        <slot></slot>

    </div>
</template>

<script>
    export default {
        naem: "LemonTabs",
        props: {
            selected: {
                type: Boolean,
                default: true
            },

        }
    }
</script>

<style lang="scss" scoped>
.tabs{

}
</style>