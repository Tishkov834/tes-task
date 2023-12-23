<script setup>
import Button from '@/components/common/Button';

</script>

<template>
  <nav class="menu-wrapper">
    <ul class="menu-wrapper-list">
      <li class="menu-wrapper-list-item">
        <Button>Users</Button>
      </li>
      <li class="menu-wrapper-list-item">
        <Button>Sign up</Button>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.menu-wrapper {
  &-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: inline-flex;
    align-items: flex-start;
    gap: 10px;
  }
}

</style>
