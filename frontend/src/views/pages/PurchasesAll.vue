<template>

<purchase-form v-model="drawer"></purchase-form>

<search-bar v-model="query" 
    :placeholder="t('common.search')" 
    :btnLabel="t('purchase.newPurchaseBtn')"
    @on-btn-click="() => drawer = true">
</search-bar>

</template>

<script setup>
import {ref} from 'vue'
import {useI18n} from 'vue-i18n'

import PurchaseForm from '../purchase/PurchaseForm.vue'
import SearchBar from '../common/SearchBar.vue'

const {t} = useI18n()

let drawer = ref(false)
let query = ref('')

</script>