<template>
  <right-drawer v-model="model" :title="t('purchase.createPurchase')">
    <q-form @submit="submit">
      <input-custom v-model="form.name" 
        :label="t('auth.nameField')"
        required>
      </input-custom>

      <div class="row justify-between">
        <input-custom v-model="form.quantity" 
          :label="t('purchase.quantityField')"
          type="number"
          class="col-5">
        </input-custom>

        <input-custom v-model="form.unit" 
          :label="t('purchase.unitField')"
          class="col-5">
        </input-custom>
      </div>

      <!-- Total price -->
      <div class="row justify-between items-center">

        <input-custom v-model="form.price" 
          type="number"
          required
          class="col-6"
        >
          <span>{{ t('purchase.priceTotalField') + ' (€)*' }}</span>
          <span @click="calculatePrice = !calculatePrice" class="link q-ml-lg">{{ t('purchase.calculate') }}</span>
        </input-custom>

        <div v-if="form.price && form.quantity" class="col-4 txt-light">
          {{ `${pricePerUnit} € / ${getUnit}` }}
        </div>
      </div>

      <!-- Calculate price -->
      <calculate-price-helper v-if="calculatePrice" v-model="form.price" :unit="getUnit" :total-quantity="form.quantity"></calculate-price-helper>

      <input-custom v-model="form.shop" 
        :label="t('purchase.shopField')">
      </input-custom>

      <input-custom v-model="form.purchased_at" 
        :label="t('purchase.purchasedAtField')"
        type="date">
      </input-custom>

      <input-custom v-model="form.note" 
        :label="t('purchase.noteField')"
        type="textarea">
      </input-custom>

      <div class="row justify-end q-pt-md">
        <q-btn push color="primary" text-color="white" :label="t('common.createBtn')" type="submit"/>
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

import RightDrawer from '../common/RightDrawer.vue';
import InputCustom from '../common/InputCustom.vue'
import CalculatePriceHelper from "./CalculatePriceHelper.vue";


const model = defineModel()
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

const pricePerUnit = computed(() => form.price / form.quantity )
const getUnit = computed(() => form.unit || t('purchase.unitField'))

const submit = () => {
  form._projectId = projectStore.currentProjectId
  api.post('/api/purchase/create', form)
    .then(response => {
      purchaseStore.addPurchaseToList(response.data)
      Object.assign(form, purchaseObject);
      model.value = false
    })
    .catch(error => console.error(error))
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