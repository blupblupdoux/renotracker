<template>
  <loader-default :show="!loaded"></loader-default>

  <div v-if="loaded">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useProjectStore } from 'src/stores/project-store.js'

import LoaderDefault from '../common/LoaderDefault.vue';

const props = defineProps({id: String})
const projectStore = useProjectStore()

const loaded = ref(false)

projectStore.updateCurrentProjectId(props.id)

onMounted(async () => {
  if(projectStore.projects.length === 0) {
    await projectStore.fetchCurrentProject()
  }
  loaded.value = true
})

</script>