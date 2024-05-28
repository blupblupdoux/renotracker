<template>
  <q-table
    :rows="purchases"
    :columns="columnsFiltered"
    row-key="_id"
    virtual-scroll
    :rows-per-page-label="t('purchase.recordPerPage')"
    :rows-per-page-options="[25, 50, 100]"
    @row-click="onRowclick"
  >

    <!-- Col label - Used when link purchase to sub-project -->
    <template v-if="isLinkerMode" v-slot:header="props">
      <q-tr :props="props">
        <q-th auto-width />
        <q-th v-for="col in props.cols" :key="col.name" :props="props">{{ col.label }}</q-th>
      </q-tr>
    </template>

    <!-- Col collapse - Used when link purchase to sub-project -->
    <template v-if="isLinkerMode" v-slot:body="props">

      <!-- Cell content -->
      <q-tr @click="props.expand = !props.expand" :props="props">
        <q-td auto-width><q-btn size="sm" round dense :icon="props.expand ? 'keyboard_arrow_up' : 'keyboard_arrow_down'" /></q-td>
        <q-td v-for="col in props.cols" :key="col.name" :props="props">{{ col.value }}</q-td>
      </q-tr>

      <!-- Collapse content -->
      <q-tr v-show="props.expand" :props="props">
        <q-td colspan="100%">
          <purchases-sub-project-collapse></purchases-sub-project-collapse>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script setup>
import {useI18n} from 'vue-i18n'
import { currencyBeautiful } from 'src/composables/Formatter';
import { usePurchaseStore } from 'src/stores/purchase-store';
import {computed} from 'vue'

import PurchasesSubProjectCollapse from './PurchasesSubProjectCollapse.vue';

const props = defineProps({
  isLinkerMode: {type: Boolean, default: false}, 
  purchases: Array, 
  columnsExcluded: {type: Array, default(){return []}}
})
const {t} = useI18n()
const purchaseStore = usePurchaseStore()

const quantityWithUnit = (row) => row.quantity + ' ' + (row.unit || '')
const pricePerUnit = (row) => currencyBeautiful(row.price / row.quantity) + ' / ' + (row.unit || t('purchase.unitField'))

const columnsFiltered = computed(() => columns.filter(c => !props.columnsExcluded.includes(c.name)))

const columns = [
  { name: 'name', label: t('auth.nameField'), field: 'name', align: 'left', sortable: true },
  { name: 'shop', label: t('purchase.shopField'), field: 'shop', align: 'left', sortable: true },
  { name: 'quantity', label: t('purchase.quantityField'), field: row => quantityWithUnit(row) , align: 'left', sortable: false },
  { name: 'price', label: t('purchase.priceField'), field: row => pricePerUnit(row) , align: 'left', sortable: false },
  { name: 'category', label: 'Categories', field: row => 'xx' , align: 'left', sortable: false },
]

const onRowclick = (evt, row, index) => {
  purchaseStore.updateCurrentPurchaseId(row._id)
  purchaseStore.updatePurchaseDrawer(true)
}
</script>