<script setup>
import { computed, toRefs } from 'vue';

import SectionWrapper from '@/components/common/SectionWrapper';
import Button from '@/components/common/Button';
import UserCard from '@/components/UserCard';

const props = defineProps({
  usersList: Array,
  currantPage: Number,
  totalPages: Number,
  showMoreUsers: Function,
});

const { currantPage, totalPages } = toRefs(props);

const isShowButtonDisabled = computed(() => totalPages.value === currantPage.value);
</script>

<template>
  <SectionWrapper title="Working with GET request">
    <ul class="cards-wrapper">
      <li class="cards-wrapper-item" v-for="{id, photo, name, position, email, phone} in usersList" :key="id">
       <UserCard
        :photo="photo"
        :name="name"
        :position="position"
        :email="email"
        :phone="phone"
       />
      </li>
    </ul>
    <Button @click="showMoreUsers" :disabled="isShowButtonDisabled">Show more</Button>
  </SectionWrapper>
</template>

<style scoped lang="scss">
.cards-wrapper {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 29px;

  &-item {
    list-style: none;
    width: 370px;
    height: 254px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .cards-wrapper-item {
    width: 282px;
  }
}

@media screen and (min-width: 361px) and (max-width: 768px) {
  .cards-wrapper {
    gap: 16px;

    &-item {
      width: 344px;
    }
  }
}

@media screen and (max-width: 360px) {
  .cards-wrapper {
    gap: 20px;

    &-item {
      width: 328px;
    }
  }
}

</style>
