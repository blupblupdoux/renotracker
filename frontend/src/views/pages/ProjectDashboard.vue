<template>
  <loader-default :show="!loaded"></loader-default>

  <div v-if="loaded">
    OK
  </div>
</template>

<script setup>
import { computed, onMounted, reactive } from 'vue';
import { useProjectStore } from 'src/stores/project-store.js'

import LoaderDefault from '../common/LoaderDefault.vue';

const props = defineProps({id: String})
const projectStore = useProjectStore()

const project = reactive({})
const loaded = computed(() => project && project._id)

projectStore.updateCurrentProjectId(props.id)

onMounted(async () => {
  if(projectStore.projects.length === 0) {
    await projectStore.fetchCurrentProject()
  }
  Object.assign(project, projectStore.currentProject)
})

</script>