<template>
  <div class="sub-project-purchase q-pa-md q-pb-lg">
    <div class="row justify-between items-center q-ml-sm q-mb-sm">
      <h3>Achats</h3>
      <q-btn push color="primary" text-color="white" @click="drawer = true" :label="t('subProject.linkPurchase')"></q-btn>
    </div>
    
    <purchases-table :purchases="test" :columns-excluded="['category', 'shop']"></purchases-table>

    <!-- Purchase Linker -->
    <right-drawer v-model="drawer" :width="800">
      <purchases-all :is-linker-mode="true"></purchases-all>
    </right-drawer>
  </div>
</template>

<script setup>
import {ref, onMounted } from 'vue'
import { api } from 'src/boot/axios';
import { useI18n } from 'vue-i18n';

import PurchasesTable from './PurchasesTable.vue';
import RightDrawer from '../common/RightDrawer.vue';
import PurchasesAll from '../pages/PurchasesAll.vue';

const {t} = useI18n()

const test = ref([])
const drawer = ref(false)

// onMounted(() => {
//   api.get('/api/purchase/project/' + route.params.projectId + '/all')
//     .then(response => test.value = response.data)
//     .catch(error => console.error(error))
// })
</script>

<style lang="scss">
.sub-project-purchase {
  background-color: white;
  border-radius: 8px;
}
</style>