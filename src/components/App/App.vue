<script setup>
import MainPage from '@/pages/MainPage.vue';

</script>

<template>
  <MainPage />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap');
@import "@/styles/normalize.css";
@import "@/styles/tooltip";

html, body {
  height: 100%;
  width: 100%;
}

#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  line-height: 26px;
  font-size: 16px;
  font-style: normal;
  height: 100%;
  width: 100%;
}

</style>
