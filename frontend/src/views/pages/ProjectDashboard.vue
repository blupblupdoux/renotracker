<template>
  <loader-default :show="!loaded"></loader-default>

  <div v-if="loaded">
    <h2>
      <span>{{ t('project.projectTitle') }}</span>
      <span class="project-name">{{ project.name }}</span>
    </h2>

    <div class="row justify-between">
      <div class="p-dash-my-project row">
        <div class="sub-title q-mb-md">{{ t('project.myProject') }}</div>
        <div class="txt-light">{{ project.description }}</div>
      </div>

      <div class="p-dash-budget row">
        <div class="sub-title q-mb-md">{{ t('project.budget') }}</div>
        <budget-progress-bar :total="project.budget" :spent="70000"></budget-progress-bar>
      </div>
    </div>

    <project-nav-tiles></project-nav-tiles>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive } from 'vue';
import { useProjectStore } from 'src/stores/project-store.js'
import { useI18n } from 'vue-i18n';

import LoaderDefault from '../common/LoaderDefault.vue';
import ProjectNavTiles from '../project/ProjectNavTiles.vue';
import BudgetProgressBar from '../common/BudgetProgressBar.vue'

const props = defineProps({id: String})
const {t} = useI18n()
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

<style lang="scss">
.p-dash-my-project, .p-dash-budget {
  background-color: white;
  border-radius: 8px;
  width: 49%;
  //height: 10rem;
  padding: 1.5rem 2rem
}
</style>