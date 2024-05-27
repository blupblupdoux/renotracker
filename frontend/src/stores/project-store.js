import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { api } from 'src/boot/axios';

export const useProjectStore = defineStore('project', () => {
  
  let projects = ref([]);

  const getProject = (id) => {
    const results = projects.value.filter(project => project._id === id)
    return results.length > 0 ? results[0] : null 
  }

  const updateProjects = (payload) => projects.value = payload
  const addProjectToList = (payload) => projects.value.push(payload)

  const fetchProject = async (id) => {
    await api.get('/api/project/' + id)
      .then(response => addProjectToList(response.data))
      .catch((error) => console.error(error))
  }
  
  return {
    projects, 
    getProject, 
    updateProjects, addProjectToList, 
    fetchProject
  }
});
