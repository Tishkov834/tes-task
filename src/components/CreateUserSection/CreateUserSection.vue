<script setup>
import SectionWrapper from '@/components/common/SectionWrapper';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import RadioButtons from '@/components/common/RadioButtons';
import CustomUpload from '@/components/CustomUpload';

defineProps({
  positions: Array,
  selectedOption: Number,
  fileName: String,
  isFormValid: Boolean,
  updateSelectedOption: Function,
  handleFileChange: Function,
  handleCreateUser: Function,
});
</script>

<template>
  <SectionWrapper title="Working with POST request">
    <form class="form-wrapper">
      <Input name="name" title="Name" placeholder="Your name" />
      <Input name="email" title="Email" placeholder="Email" />
      <Input name="phone" title="Phone" placeholder="Phone" helper-text="+38 (XXX) XXX - XX - XX" v-mask="'+380#########'" />
      <div class="select-position-wrapper">
        <h2 class="select-position-wrapper-title">Select your position</h2>
        <RadioButtons :value="selectedOption" :positions="positions" @update-value="updateSelectedOption" />
      </div>
      <CustomUpload name="photo" placeholder="Upload your photo" :file-name="fileName" :on-change="handleFileChange"/>
    </form>
    <Button @click="handleCreateUser" :disabled="!isFormValid">Sign up</Button>
  </SectionWrapper>
</template>

<style scoped lang="scss">
.form-wrapper {
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.select-position-wrapper {
  &-title {
    color: black;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    margin: 0 0 11px 0;
  }
}

@media screen and (max-width: 360px) {
  .form-wrapper {
    width: 328px;
  }
}

</style>
