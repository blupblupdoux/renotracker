<template>
  <sub-project-form v-model="drawer"></sub-project-form>

  <h2>{{ t('nav.subProjects') }}</h2>

  <search-bar v-model="query" 
    :placeholder="t('common.search')" 
    :btnLabel="t('subProject.newSubProjectBtn')"
    @on-btn-click="drawer = true">
  </search-bar>

  <div class="row">
    <sub-project-card v-for="subProject in subProjectsFiltered" 
      :key="'subProject-card-' + subProject._id"
      :sub-project="subProject">
    </sub-project-card>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, computed, ref } from 'vue'
import { useSubProjectStore } from 'src/stores/subProject-store.js'
import { useProjectStore } from 'src/stores/Project-store.js'
import { api } from 'src/boot/axios';
import { useRoute } from 'vue-router';

import SubProjectForm from '../subProject/SubProjectForm.vue'
import SearchBar from '../common/SearchBar.vue'
import SubProjectCard from '../subProject/SubProjectCard.vue'

const {t} = useI18n()
const route = useRoute()
const projectStore = useProjectStore()
const subProjectStore = useSubProjectStore()
let drawer = ref(false)
let query = ref('')

const subProjectsFiltered = computed(() => {
  if(!query.value) return subProjectStore.subProjects
  return subProjectStore.subProjects.filter(subProject => subProject.name.toLowerCase().includes(query.value.toLocaleLowerCase()))
})

onMounted(() => {
  api.get('/api/project/' + route.params.projectId  + '/subprojects')
    .then(response => subProjectStore.updateSubProjects(response.data))
    .catch(error => console.error(error))
})
</script>