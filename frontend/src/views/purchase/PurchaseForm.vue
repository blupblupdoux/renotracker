<template>
  <right-drawer v-model="purchaseStore.purchaseDrawer" 
    @show="onDrawerOpen"
    @hide="onDrawerHide" 
    :title="formTitle"
  >
    <q-form @submit="submit">
      <!-- Name -->
      <input-custom v-model="form.name" :label="t('auth.nameField')" required />

      <!-- Quantity and Unit -->
      <div class="row justify-between">
        <input-custom v-model="form.quantity" :label="t('purchase.quantityField')" type="number" class="col-5" />
        <input-custom v-model="form.unit" :label="t('purchase.unitField')" class="col-5" />
      </div>

      <!-- Total price -->
      <div class="row justify-between items-center">

        <input-custom v-model="form.price" type="number" required class="col-6" >
          <span>{{ t('purchase.priceTotalField') + ' (€)*' }}</span>
          <span @click="calculatePrice = !calculatePrice" class="link q-ml-lg">{{ t('purchase.calculate') }}</span>
        </input-custom>

        <!-- Price per unit -->
        <div v-if="form.price && form.quantity" class="col-4 txt-light">{{ `${pricePerUnit} € / ${getUnit}` }}</div>
      </div>

      <!-- Calculate price -->
      <calculate-price-helper v-if="calculatePrice" v-model="form.price" :unit="getUnit" :total-quantity="form.quantity"></calculate-price-helper>

      <!-- Shop -->
      <input-custom v-model="form.shop" :label="t('purchase.shopField')" />

      <!-- Purchase At -->
      <input-custom v-model="form.purchased_at" :label="t('purchase.purchasedAtField')" type="date" />

      <!-- Note -->
      <input-custom v-model="form.note" :label="t('purchase.noteField')" type="textarea" />

      <!-- Buttons -->
      <div class="q-pt-md">
        <q-btn v-if="isUpdateMode" @click="deletePurchase" push color="negative" text-color="white" :label="t('common.deleteBtn')"/>
        <q-btn push color="primary" text-color="white" :label="btnLabel" type="submit" style="float: right"/>
      </div>
      
    </q-form>
  </right-drawer>
</template>

<script setup>
import { reactive, ref, computed } from "vue"
import { useI18n } from "vue-i18n";
import { useProjectStore } from "src/stores/project-store";
import { api } from "src/boot/axios";
import { usePurchaseStore } from "src/stores/purchase-store";
import { date } from 'quasar'

import RightDrawer from '../common/RightDrawer.vue';
import InputCustom from '../common/InputCustom.vue'
import CalculatePriceHelper from "./CalculatePriceHelper.vue";


const {t} = useI18n()
const projectStore = useProjectStore()
const purchaseStore = usePurchaseStore()

const purchaseObject = {
  _projectId: null,
  name: null,
  quantity: null,
  unit: null,
  price: null,
  shop: null,
  purchased_at: null,
  note: null
}

const form = reactive({...purchaseObject});
let calculatePrice = ref(false)

const isUpdateMode = computed(() => !!purchaseStore.currentPurchaseId)

const formTitle = computed(() => isUpdateMode.value ? t('purchase.updatePurchase') : t('purchase.createPurchase') )
const btnLabel = computed(() => isUpdateMode.value ? t('common.updateBtn') : t('common.createBtn') )

const pricePerUnit = computed(() => form.price / form.quantity )
const getUnit = computed(() => form.unit || t('purchase.unitField'))

const submit = async () => {
  form._projectId = projectStore.currentProjectId

  try {
    if(isUpdateMode.value) {
      const response = await api.put('/api/purchase/update', form)
      purchaseStore.editPurchase(response.data)
      purchaseStore.updateCurrentPurchaseId(null)
    } else {
      const response = await api.post('/api/purchase/create', form)
      purchaseStore.addPurchaseToList(response.data)
    }

    onDrawerHide()
  } catch (error) {
    console.error(error)
  }
}

const deletePurchase = () => {
  api.delete('/api/purchase/'+ purchaseStore.currentPurchaseId +'/delete')
    .then(() => {
      purchaseStore.removePurchaseFromList(purchaseStore.currentPurchaseId)
      onDrawerHide()
    })
    .catch(error => console.error(error))
}

const onDrawerOpen = () => {
  if(isUpdateMode.value) { 
    Object.assign(form, purchaseStore.currentPurchase)
    form.purchased_at = date.formatDate(form.purchased_at, 'YYYY-MM-DD')
  }
}

const onDrawerHide = () => {
  purchaseStore.updatePurchaseDrawer(false)
  Object.assign(form, purchaseObject);
  purchaseStore.updateCurrentPurchaseId(null)
}

</script>

<style lang="scss">
.calculate-price {
  border-radius: 8px;
  padding: .5rem 1rem 0 1rem;
  margin-bottom: 1rem;
  background-color: $warning;
}

.price-help-input-1 .q-field__label {
  margin-left: 24px;
}

.price-help-input-2 .q-field__label {
  margin-left: 8px;
}
</style>