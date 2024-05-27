<template>
  <loader-default :show="!loaded"></loader-default>

  <div v-if="loaded">
    <router-view :sub-project-id="id"></router-view>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useSubProjectStore } from 'src/stores/subProject-store.js'

import LoaderDefault from '../common/LoaderDefault.vue';

const props = defineProps({id: String})
const subProjectStore = useSubProjectStore()

const loaded = ref(false)

onMounted(async () => {
  if(subProjectStore.subProjects.length === 0) {
    await subProjectStore.fetchCurrentSubProject(props.id)
  }
  loaded.value = true
})

</script>