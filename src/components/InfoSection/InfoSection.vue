<script setup>
import Button from '@/components/common/Button';

</script>

<template>
  <section class="info-section">
    <div class="info-section-content">
      <div class="info-section-content-texts">
        <h1 class="info-section-content-texts-title">Test assignment for front-end developer</h1>
        <p class="info-section-content-texts-text">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
      </div>
      <Button>Sign up</Button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.info-section {
  width: 100%;
  min-height: 650px;
  background-size: cover;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('~@/assets/bg-image.jpeg') lightgray;
  background-position: -695px -842.321px;
  background-size: 218.803% 262.115%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  &-content {
    max-width: 380px;
    overflow: hidden;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    &-texts {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 21px;
      text-align: center;
      color: white;

      &-title {
        margin: 0;
        padding: 0;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 40px;
      }

      &-text {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
      }
    }
  }
}

@media screen and (min-width: 361px) and (max-width: 768px) {
  .info-section {
    min-height: 500px;
    background-position: -762.661px -317.009px;
    background-size: 342.315% 164.03%;
  }
}

@media screen and (max-width: 360px) {
  .info-section {
    background-position: -446.56px -317.009px;
    background-size: 342.315% 164.03%;

    &-content {
      width: 328px;
    }
  }
}

</style>
