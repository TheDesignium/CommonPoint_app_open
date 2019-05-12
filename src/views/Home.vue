<template>
  <div class="home">
    <widget>
      <template #header>hogehoge</template>
    </widget>
    <widget>
      <template #header>hugahuga</template>
    </widget>
    <widget></widget>
  </div>
</template>

<script>
    import Widget from '@/components/Widget';

    export default {
        name: 'home',
        components: {
            Widget
        }
    }
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-wrap: wrap;
  }
</style>
