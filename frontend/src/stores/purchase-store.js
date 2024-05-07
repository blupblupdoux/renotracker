import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePurchaseStore = defineStore('purchase', () => {
  
  let purchases = ref([]);

  const updatePurchases = (payload) => purchases.value = payload
  const addPurchaseToList = (payload) => purchases.value.push(payload)
  
  return {
    purchases, 
    updatePurchases, addPurchaseToList
  }
});
