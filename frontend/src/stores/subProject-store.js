import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSubProjectStore = defineStore('subProject', () => {
  
  let subProjects = ref([]);

  const updateSubProjects = (payload) => subProjects.value = payload
  
  return {
    subProjects, 
    updateSubProjects
  }
});
