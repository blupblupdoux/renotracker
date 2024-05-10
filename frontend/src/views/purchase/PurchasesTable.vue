<template>
  <q-table
      :rows="purchaseStore.purchases"
      :columns="columns"
      row-key="name"
      virtual-scroll
      style="height: 70vh"
      :rows-per-page-label="t('purchase.recordPerPage')"
      :rows-per-page-options="[10, 25, 50, 100]"
    />
</template>

<script setup>
import { usePurchaseStore } from 'src/stores/purchase-store';
import {useI18n} from 'vue-i18n'

const purchaseStore = usePurchaseStore()
const {t} = useI18n()

const quantityWithUnit = (row) => {
  const unit =  row.unit ? ' ' + row.unit : ''
  return row.quantity + unit
}

// const pricePerUnit = (row) => {
//   const unit =  row.unit ? ' ' + row.unit : ''
//   return row.quantity + unit
// }

const columns = [
  { name: 'name', label: t('auth.nameField'), field: 'name', align: 'left', sortable: true },
  { name: 'shop', label: t('purchase.shopField'), field: 'shop', align: 'left', sortable: true },
  { name: 'quantity', label: t('purchase.quantityField'), field: row => quantityWithUnit(row) , align: 'left', sortable: false },
  { name: 'price', label: t('purchase.priceField'), field: row => row.price + '€' , align: 'left', sortable: false },
  { name: 'category', label: 'Categories', field: row => 'xx' , align: 'left', sortable: false },
]
</script>