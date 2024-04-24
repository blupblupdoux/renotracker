<template>
  <project-form v-model="drawer"></project-form>

  <div class="row items-center">
    <input-custom placeholder="Search" size="md" class="q-mr-md" style=" margin-bottom: 0;"></input-custom>
    <q-btn push color="primary" text-color="white" @click="drawer = true" :label="'test'"></q-btn>
  </div>

  <div>
    <project-card v-for="project in projectStore.projects" 
      :key="'project-card-' + project._id"
      :project="project">
    </project-card>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { api } from 'src/boot/axios';
import { useProjectStore } from 'src/stores/project-store.js'

import ProjectForm from '../project/ProjectForm.vue'
import ProjectCard from '../project/ProjectCard.vue'
import InputCustom from '../common/InputCustom.vue';

const projectStore = useProjectStore()
let drawer = ref(false)

onMounted(() => {
  api.get('/api/project/all')
    .then(response => projectStore.updateProjects(response.data))
    .catch(error => console.error(error))
})
</script>