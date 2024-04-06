import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('user', () => {
  const user = ref(null);

  return {user}
});
