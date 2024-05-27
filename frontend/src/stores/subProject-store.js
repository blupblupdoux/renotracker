import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from 'src/boot/axios';

export const useSubProjectStore = defineStore('subProject', () => {
  
  let subProjects = ref([]);

  const currentSubProject = (id) => {
    const results = subProjects.value.filter(subProject => subProject._id === id)
    return results.length > 0 ? results[0] : null 
  }

  const updateSubProjects = (payload) => subProjects.value = payload
  const addSubProjectToList = (payload) => subProjects.value.push(payload)

  const fetchCurrentSubProject = async (id) => {
    await api.get('/api/subProject/' + id)
      .then(response => addSubProjectToList(response.data))
      .catch((error) => console.error(error))
  }
  
  return {
    subProjects, 
    currentSubProject,
    updateSubProjects, addSubProjectToList,
    fetchCurrentSubProject
  }
});
