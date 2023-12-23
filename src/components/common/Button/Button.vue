<script setup>

</script>

<template>
  <button class="button">
    <slot/>
  </button>
</template>

<style scoped lang="scss">
@import "@/styles/colors";

.button {
  width: 100px;
  height: 34px;
  flex-shrink: 0;
  border: none;
  border-radius: 80px;
  background: $yellow;
  cursor: pointer;
}

.button:hover {
  background: $light-yellow;
}

.button:disabled {
  background: $gray;
  color: white;
}

</style>
