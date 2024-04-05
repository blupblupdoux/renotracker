<template>
  <div style="padding: 2rem">
    <input-custom v-model="test" label="coucou" size="md" required></input-custom>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputCustom from "../common/InputCustom.vue";

let test = ref();
console.log(test);
</script>
