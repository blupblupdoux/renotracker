import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const usePurchaseStore = defineStore('purchase', () => {
  
  let purchases = ref([]);
  let purchaseDrawer = ref(false)
  let currentPurchaseId = ref(null)

  const currentPurchase = computed(() => {
    const results = purchases.value.filter(purchase => purchase._id === currentPurchaseId.value)
    return results.length > 0 ? results[0] : null 
  })

  const updatePurchases = (payload) => purchases.value = payload
  const addPurchaseToList = (payload) => purchases.value.unshift(payload)
  const updatePurchaseDrawer = (payload) => purchaseDrawer.value = payload
  const updateCurrentPurchaseId = (payload) => currentPurchaseId.value = payload

  const editPurchase = (payload) => {
    console.log(payload)
  }
  
  return {
    purchases, purchaseDrawer, currentPurchaseId,
    currentPurchase,
    updatePurchases, addPurchaseToList, updatePurchaseDrawer, updateCurrentPurchaseId,
    editPurchase
  }
});
