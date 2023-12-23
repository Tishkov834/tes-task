<script setup>
import Header from '@/components/Header';

</script>

<template>
  <div class="layout-wrapper">
    <Header></Header>
    <main class="main-wrapper">
      <slot/>
    </main>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/colors";

.layout-wrapper {
  height: 100%;
  width: 100%;

  .main-wrapper {
    min-width: 100%;
    background: $light-gray;
    min-height: calc(100% - 60px);
    display: flex;
    justify-content: center;
    overflow-x: hidden;
  }
}

</style>
