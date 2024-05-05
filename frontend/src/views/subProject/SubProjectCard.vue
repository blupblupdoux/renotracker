<template>
  <div>
    {{ subProject.name }}
  </div>
</template>

<script setup>
import { currencyBeautiful } from 'src/composables/Formatter'

const props = defineProps({subProject: Object})

</script>