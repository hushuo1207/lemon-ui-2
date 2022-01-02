<template>
  <div clase="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: "LemonCollapse"
}
</script>

<style lang="scss" scoped>
 $grey: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>
