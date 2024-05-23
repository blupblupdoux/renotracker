import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const usePurchaseStore = defineStore('purchase', () => {
  
  // Data
  let purchases = ref([]);
  let purchaseDrawer = ref(false)
  let currentPurchaseId = ref(null)

  // Getters
  const currentPurchase = computed(() => {
    const results = purchases.value.filter(purchase => purchase._id === currentPurchaseId.value)
    return results.length > 0 ? results[0] : null 
  })

  const getPurchaseIndex = (id) => purchases.value.findIndex(p => p._id === id)

  // Mutations
  const updatePurchases = (payload) => purchases.value = payload
  const updatePurchaseDrawer = (payload) => purchaseDrawer.value = payload
  const updateCurrentPurchaseId = (payload) => currentPurchaseId.value = payload

  // Actions
  const addPurchaseToList = (payload) => purchases.value.unshift(payload)
  const editPurchase = (payload) => purchases.value[getPurchaseIndex(payload._id)] = payload
  const removePurchaseFromList = (id) => purchases.value.splice(getPurchaseIndex(id), 1)
  
  return {
    purchases, purchaseDrawer, currentPurchaseId,
    currentPurchase,
    updatePurchases, updatePurchaseDrawer, updateCurrentPurchaseId,
    addPurchaseToList, editPurchase, removePurchaseFromList
  }
});
