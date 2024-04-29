<template>
  <div class="nav-tile column justify-center items-center">
    <div class="nav-tile-title q-mb-md">{{ title }}</div>
    <q-icon :name="icon" size="5rem" color="primary"></q-icon>
  </div>
</template>

<script setup>
  const props = defineProps({title: String, icon: String})
</script>

<style lang="scss">
.nav-tile {
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
}

.nav-tile-title {
  font-weight: 500;
  font-size: x-large;
  color: $primary;
}
</style>