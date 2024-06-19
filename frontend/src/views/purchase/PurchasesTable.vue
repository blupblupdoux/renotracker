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
        <q-td auto-width :class="{'attached': props.row?.subprojectQuantity}">
          <q-btn size="sm" round dense :icon="props.expand ? 'keyboard_arrow_up' : 'keyboard_arrow_down'" />
        </q-td>

        <q-td v-for="col in props.cols" 
          :key="col.name" 
          :props="props" 
          :class="{'attached': props.row?.subprojectQuantity}"
        >
          {{ col.value }}
        </q-td>
      </q-tr>

      <!-- Collapse content -->
      <q-tr v-if="props.expand" :props="props">
        <q-td colspan="100%" class="collapse-background">
          <purchases-sub-project-collapse :purchase="props.row"></purchases-sub-project-collapse>
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
  readonly: {trype: Boolean, default: false},
  purchases: Array, 
  columnsExcluded: {type: Array, default(){return []}}
})
const {t} = useI18n()
const purchaseStore = usePurchaseStore()

const quantityWithUnit = (quantity, unit) => quantity + ' ' + (unit || '')
const pricePerUnit = (row) => currencyBeautiful(row.price / (row.stock || row.quantity)) + ' / ' + (row.unit || t('purchase.unitField'));

const columnsFiltered = computed(() => columns.filter(c => !props.columnsExcluded.includes(c.name)))

const columns = [
  { 
    name: 'name', 
    label: t('auth.nameField'), 
    field: 'name', 
    align: 'left', 
    sortable: true 
  },
  { 
    name: 'shop', 
    label: t('purchase.shopField'), 
    field: 'shop', 
    align: 'left', 
    sortable: true 
  },
  { 
    name: 'stock', 
    label: t('purchase.stock'), 
    field: row => quantityWithUnit(row.stock, row.unit) , 
    align: 'left', 
    sortable: false 
  },
  { 
    name: 'quantity', 
    label: t('purchase.quantityField'), 
    field: row => quantityWithUnit(row.quantity, row.unit), 
    align: 'left', 
    sortable: false 
  },
  { 
    name: 'price', 
    label: t('purchase.priceField'), 
    field: row => pricePerUnit(row), 
    align: 'left',
    sortable: false 
  },
  // { name: 'category', label: 'Categories', field: row => 'xx' , align: 'left', sortable: false },
]

const onRowclick = (evt, row, index) => {
  if(!props.readonly) {
    purchaseStore.updateCurrentPurchaseId(row._id)
    purchaseStore.updatePurchaseDrawer(true)
  }
}
</script>

<style lang="scss">
.collapse-background {
  background-color: #f2f2f2!important;
}
tbody .attached {
  background-color: $primaryLight;
}
</style>