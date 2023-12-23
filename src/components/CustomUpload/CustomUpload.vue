<script setup>
import { computed, ref, toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  name: String,
  placeholder: String,
  fileName: String,
  onChange: Function,
});

const name = toRef(props, 'name');

const fileInputRef = ref(null);

const fileInput = toRef(fileInputRef, 'value');

const isFileNameSet = computed(() => props.fileName.length);

const {
  value: inputValue,
  errorMessage,
  setValue,
} = useField(name, undefined, {
  initialValue: null,
});

const handleFileChange = () => {
  if (fileInput.value) {
    const file = fileInput.value.files?.length ? fileInput.value.files[0] : null;

    setValue(file);

    if (props.onChange) {
      props.onChange(file);
    }
  }
};
</script>

<template>
  <div>
    <div class="custom-upload">
      <label :class="['custom-upload-button', errorMessage && 'error']">
        <input :name="name" class="custom-upload-input" type="file" @change="handleFileChange" ref="fileInput" />
        Upload
      </label>
      <span :class="[isFileNameSet ? 'custom-upload-file-name' : 'custom-upload-placeholder', errorMessage && 'error' ]">{{ isFileNameSet ? fileName : placeholder }}</span>
    </div>
    <p class="error-text">{{errorMessage}}</p>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/colors";

.custom-upload {
  max-height: 54px;
  display: flex;
  align-items: center;
  position: relative;

  &-button {
    padding: 13px 15px;
    cursor: pointer;
    background-color: inherit;
    border: 1px solid black;
    border-radius: 4px 0 0 4px;
    user-select: none;
    position: relative;
  }

  &-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    z-index: 1;
  }

  &-button.error {
    border: 2px solid $red;
  }

  &-file-name {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-radius: 0 4px 4px 0;
    border: 1px solid $dark-white;
    border-left: none;
    background: $light-gray;
    padding: 13px 0 13px 16px;
  }

  &-file-name.error {
    border: 2px solid $red;
    border-left: none;
  }

  &-placeholder {
    max-height: 54px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-radius: 0 4px 4px 0;
    border: 1px solid $dark-white;
    border-left: none;
    background: $light-gray;
    padding: 13px 0 13px 16px;
    color: $dark-gray;
  }

  .custom-upload-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
}

.error-text {
  color: $red;
  position: absolute;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin: 4px 0 0 16px;
}

</style>
