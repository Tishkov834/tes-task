<script setup>
import { truncateString } from '@/helpers/truncateString';
import { formatPhoneNumber } from '@/helpers/formatPhoneNumber';

defineProps({
  photo: String,
  name: String,
  position: String,
  email: String,
  phone: String,
});
</script>

<template>
  <div class="user-card">
    <img class="user-card-photo" alt="user_photo" :src="photo">
    <div v-tooltip="name" class="tooltip">
      <p class="user-card-name">{{truncateString(name)}}</p>
    </div>
    <div class="user-card-info">
      <p class="user-card-info-text">{{position}}</p>
      <div v-tooltip="email" class="tooltip">
        <p class="user-card-info-text">{{truncateString(email)}}</p>
      </div>
      <p class="user-card-info-text">{{formatPhoneNumber(phone)}}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-card {
  width: 330px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;

  &-photo {
    width: 70px;
    height: 70px;
    border-radius: 70px;
  }

  &-name {
    margin: 0;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-text {
      margin: 0;
      max-width: 100%;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .tooltip {
    cursor: pointer;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .user-card {
    width: 242px;
  }
}

@media screen and (min-width: 361px) and (max-width: 768px) {
  .user-card {
    width: 304px;
  }
}

@media screen and (max-width: 360px) {
  .user-card {
    width: 288px;
  }
}

</style>
