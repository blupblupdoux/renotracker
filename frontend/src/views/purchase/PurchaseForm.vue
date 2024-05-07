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

      <div class="row justify-between items-center">

        <input-custom v-model="form.price" 
          type="number"
          required
          class="col-6"
        >
          <span>{{ t('purchase.priceField') + ' (€)*' }}</span>
          <span class="link q-ml-lg">Calculer</span>
        </input-custom>

        <div v-if="form.price && form.quantity" class="col-4 txt-light">
          {{ `${pricePerUnit} € / ${getUnit}` }}
        </div>
      </div>

      <input-custom v-model="form.store" 
        :label="t('purchase.storeField')">
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
import { reactive, computed } from "vue"
import { useI18n } from "vue-i18n";

import RightDrawer from '../common/RightDrawer.vue';
import InputCustom from '../common/InputCustom.vue'

const model = defineModel()
const {t} = useI18n()
const form = reactive({});

const pricePerUnit = computed(() => form.price / form.quantity )
const getUnit = computed(() => form.unit || t('purchase.unitField'))

const submit = () => {

}

</script>