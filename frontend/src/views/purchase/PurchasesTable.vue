<template>
  <q-table
      :rows="purchases"
      :columns="columns"
      row-key="name"
      virtual-scroll
      style="height: 70vh"
      :rows-per-page-label="t('purchase.recordPerPage')"
      :rows-per-page-options="[10, 25, 50, 100]"
    />
</template>

<script setup>
import {useI18n} from 'vue-i18n'
import { currencyBeautiful } from 'src/composables/Formatter';

const props = defineProps({purchases: Array})
const {t} = useI18n()

const quantityWithUnit = (row) => row.quantity + ' ' + (row.unit || '')
const pricePerUnit = (row) => currencyBeautiful(row.price / row.quantity) + ' / ' + (row.unit || t('purchase.unitField'))

const columns = [
  { name: 'name', label: t('auth.nameField'), field: 'name', align: 'left', sortable: true },
  { name: 'shop', label: t('purchase.shopField'), field: 'shop', align: 'left', sortable: true },
  { name: 'quantity', label: t('purchase.quantityField'), field: row => quantityWithUnit(row) , align: 'left', sortable: false },
  { name: 'price', label: t('purchase.priceField'), field: row => pricePerUnit(row) , align: 'left', sortable: false },
  { name: 'category', label: 'Categories', field: row => 'xx' , align: 'left', sortable: false },
]
</script>