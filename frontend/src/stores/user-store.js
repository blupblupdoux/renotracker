import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from 'src/boot/axios';

export const useUserStore = defineStore('user', () => {
  
  const user = ref(null);
  const token = localStorage.getItem(process.env.AUTH_TOKEN_KEY)

  const initalizeUser = () => {
    if(token) {
      api.get('/api/user/current')
      .then(response => user.value = response.data)
      .catch(error => console.error(error))
    }
  }

  return {user, initalizeUser}
});
