<template>

<purchase-form></purchase-form>

<h2>{{ t('nav.purchases') }}</h2>

<search-bar v-model="query" 
    :placeholder="t('common.search')" 
    :btnLabel="t('purchase.newPurchaseBtn')"
    @on-btn-click="purchaseStore.updatePurchaseDrawer(true)">
</search-bar>

<purchases-table :purchases="filteredPurchases"></purchases-table>

</template>

<script setup>
import {ref, computed, onMounted} from 'vue'
import {useI18n} from 'vue-i18n'
import { api } from 'src/boot/axios'
import { useProjectStore } from 'src/stores/project-store';
import { usePurchaseStore } from 'src/stores/purchase-store';

import PurchaseForm from '../purchase/PurchaseForm.vue'
import SearchBar from '../common/SearchBar.vue'
import PurchasesTable from '../purchase/PurchasesTable.vue';

const {t} = useI18n()
const projectStore = useProjectStore()
const purchaseStore = usePurchaseStore()

let query = ref('')

const filteredPurchases = computed(() => {
  if(!query.value) return purchaseStore.purchases
  return purchaseStore.purchases.filter(purchase => {
    const queryFormated = query.value.toLowerCase()
    return purchase.name.toLowerCase().includes(queryFormated) || (purchase.shop && purchase.shop.toLowerCase().includes(queryFormated))
  })
})

onMounted(() => {
  api.get('/api/purchase/all', {params: {projectId: projectStore.currentProjectId}})
    .then(response => purchaseStore.updatePurchases(response.data))
    .catch(error => console.error(error))
})

</script>