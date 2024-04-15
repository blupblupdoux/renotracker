import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from 'src/boot/axios';

export const useUserStore = defineStore('user', () => {
  const user = ref(null);

  const initalizeUser = () => {
    api.get('/api/user/current').then(response => {
      console.log(response.data)
    })
  }

  return {user, initalizeUser}
});
