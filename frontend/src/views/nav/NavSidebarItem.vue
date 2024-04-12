<template>
  <q-item clickable v-ripple class="row items-center">
    <q-icon size="25px" color="primary" :name="item.icon" class="q-mr-sm" />
    {{ item.label }}
  </q-item>
</template>

<script setup>

const props = defineProps({item: Object})

</script>

<style scoped>

</style>