<template>
  <div class="row items-center q-mb-lg">
    <input-custom v-model="query" :placeholder="placeholder" size="lg" class="q-mr-md" style=" margin-bottom: 0;"></input-custom>
    <q-btn push color="primary" text-color="white" @click="$emit('onBtnClick')" :label="btnLabel"></q-btn>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import InputCustom from './InputCustom.vue';

const props = defineProps({placeholder: String, btnLabel: String})
const emits = defineEmits(['onBtnClick'])
const model = defineModel()

const query = computed({
  get() {
    return model.value
  },
  set(newValue) {
    model.value = newValue
  }
})
</script>