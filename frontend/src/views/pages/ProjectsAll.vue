<template>
  <project-form v-model="drawer"></project-form>

  <h2>{{ t('nav.projects') }}</h2>
  
  <search-bar v-model="query" 
    :placeholder="t('common.search')" 
    :btnLabel="t('project.newProjectBtn')"
    @on-btn-click="() => drawer = true">
  </search-bar>

  <div class="row justify-between">
    <project-card v-for="project in projectsFiltered" 
      :key="'project-card-' + project._id"
      :project="project">
    </project-card>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { api } from 'src/boot/axios';
import { useProjectStore } from 'src/stores/project-store.js'
import { useI18n } from 'vue-i18n';

import ProjectForm from '../project/ProjectForm.vue'
import ProjectCard from '../project/ProjectCard.vue'
import SearchBar from '../common/SearchBar.vue'

const {t} = useI18n()
const projectStore = useProjectStore()
let drawer = ref(false)
let query = ref('')

const projectsFiltered = computed(() => {
  if(!query.value) return projectStore.projects
  return projectStore.projects.filter(project => project.name.toLowerCase().includes(query.value.toLocaleLowerCase()))
})

onMounted(() => {
  api.get('/api/project/all')
    .then(response => projectStore.updateProjects(response.data))
    .catch(error => console.error(error))
})
</script>