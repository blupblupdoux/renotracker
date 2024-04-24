import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProjectStore = defineStore('project', () => {
  
  let projects = ref([]);

  const updateProjects = (payload) => projects.value = payload
  const addProjetToList = (payload) => projects.value.push(payload)

  return {projects, updateProjects, addProjetToList}
});
