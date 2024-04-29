import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { api } from 'src/boot/axios';

export const useProjectStore = defineStore('project', () => {
  
  let projects = ref([]);
  let currentProjectId = ref(null)

  const currentProject = computed(() => {
    const results = projects.value.filter(project => project._id === currentProjectId.value)
    return results.length > 0 ? results[0] : null 
  })

  const updateProjects = (payload) => projects.value = payload
  const updateCurrentProjectId = (payload) => currentProjectId.value = payload
  const addProjectToList = (payload) => projects.value.push(payload)

  const fetchCurrentProject = async () => {
    await api.get('/api/project/' + currentProjectId.value)
      .then(response => addProjectToList(response.data))
      .catch((error) => console.error(error))
  }
  
  return {
    projects, currentProjectId, 
    currentProject, 
    updateProjects, updateCurrentProjectId, addProjectToList, 
    fetchCurrentProject
  }
});
