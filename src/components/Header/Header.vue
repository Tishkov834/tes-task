<script setup>
import Menu from '@/components/Menu';

</script>

<template>
  <header class="header-wrapper">
    <div class="header-wrapper-content">
      <img class="header-wrapper-content-logo" alt="logo" src="../../assets/logo.svg">
      <Menu/>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header-wrapper {
  height: 60px;
  min-width: 100%;
  background: white;
  display: flex;
  justify-content: center;

  &-content {
    height: 100%;
    max-width: 1170px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-logo {
      width: 104px;
      height: 26px;
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .header-wrapper-content {
    margin: 0 60px;
  }
}

@media screen and (min-width: 361px) and (max-width: 768px) {
  .header-wrapper-content {
    margin: 0 32px;
  }
}

@media screen and (max-width: 360px) {
  .header-wrapper-content {
    margin: 0 16px;
  }
}

</style>
