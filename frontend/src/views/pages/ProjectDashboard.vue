<template>
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
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useProjectStore } from 'src/stores/project-store.js'
import { useRoute } from 'vue-router';

import ProjectNavTiles from '../project/ProjectNavTiles.vue';
import BudgetProgressBar from '../common/BudgetProgressBar.vue'

const {t} = useI18n()
const route = useRoute()
const projectStore = useProjectStore()
const project = projectStore.getProject(route.params.projectId)

</script>

<style lang="scss">
.p-dash-my-project, .p-dash-budget {
  background-color: white;
  border-radius: 8px;
  width: 49%;
  padding: 1.5rem 2rem
}
</style>