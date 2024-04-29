<template>
  <q-inner-loading :showing="show">
    <q-spinner-ios size="5rem" color="primary" />
  </q-inner-loading>
</template>

<script setup>
const props = defineProps({show: Boolean})
</script>