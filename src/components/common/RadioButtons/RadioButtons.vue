<script setup>
import { ref } from 'vue';

const props = defineProps({
  value: Number,
  positions: Array,
});

const selectedOption = ref(props.value);

const emits = defineEmits(['update-value']);
</script>

<template>
  <div class="radio-buttons">
    <div class="radio" v-for="{id, name} in positions" :key="id">
      <input class="radio-input" v-model="selectedOption" @change="() => emits('update-value', selectedOption)" :id="id" name="name" type="radio" :value="id">
      <label :for="id" class="radio-label">{{name}}</label>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/colors";

.radio-buttons {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 10px 0 0 0;

  .radio {
    display: flex;
    align-items: center;

    .radio-input {
      position: absolute;
      opacity: 0;

      + .radio-label {
        &:before {
          content: '';
          border-radius: 100%;
          border: 1px solid $dark-white;
          display: inline-block;
          width: 18px;
          height: 18px;
          position: relative;
          margin-right: 12px;
          vertical-align: top;
          cursor: pointer;
          transition: all 250ms ease;
        }
      }
      &:checked {
        + .radio-label {
          &:before {
            background-color: $blue;
            border-color: $blue;
            box-shadow: inset 0 0 0 4px $light-gray;
          }
        }
      }
      &:hover {
        + .radio-label {
          &:before {
            outline: none;
            border-color: $blue;
          }
        }
      }
    }

    &-label {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
}

</style>
