<template>
  <el-card class="widget">
    <div slot="header">
      <slot name="header">
        currency name
      </slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </el-card>
</template>

<script>
    export default {
        name: 'Widget'
    }
</script>

<style lang="scss" scoped>
  .widget {
    width: 512px;
  }
</style>
