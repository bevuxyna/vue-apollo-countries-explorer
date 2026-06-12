<script setup lang="ts">
import MainView from '@/views/MainView.vue';
</script>

<template>
  <div class="app">
    <div class="container">
      <MainView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app {
  background: var(--background);
  color: var(--text);
}

.container {
  margin: 0 auto;
  max-width: 1120px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
