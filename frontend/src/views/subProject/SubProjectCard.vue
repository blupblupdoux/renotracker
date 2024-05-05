<template>
  <div class="subProject-card card">
    <div class="sub-title text-dark">{{ subProject.name }}</div>
    <div>
      <div></div>
      <div class="subProject-status"></div>
    </div>
  </div>
</template>

<script setup>
import { currencyBeautiful } from 'src/composables/Formatter'
import { useI18n } from 'vue-i18n';

const props = defineProps({subProject: Object})
const {t} = useI18n()


</script>

<style lang="scss">
.subProject-card {
  margin-bottom: 1rem;
  width: 49%;
}
.subProject-priority {
  border-radius: 5px;
  background-color: $accent;
}
</style>