<template>
  <div class="calculate-price">
    <div class="q-my-sm text-bold">{{ t('purchase.calculatePrice') }}</div>

    <div class="row justify-between items-end q-pb-md">

      <span>{{ t('purchase.calculatePriceHelp_1') }}</span>

      <q-input v-model="priceBinding" :label="t('purchase.priceField')" type="number" step="any" class="price-help-input-1 col-3" dense />

      <span>{{ '€ ' + t('purchase.calculatePriceHelp_2') }}</span>

      <q-input v-model="quantityBinding" :label="t('purchase.quantityField')" type="number" step="any" class="price-help-input-2 col-3" dense />
      
      <span>{{ unit }}</span>
    </div>
  </div>
</template>

<script setup>

import {useI18n} from "vue-i18n"
import {ref, computed} from 'vue'

const model = defineModel()
const props = defineProps({unit: String, totalQuantity: {type: [Number, String], default: 1}})
const {t} = useI18n()

let price = ref('')
let quantity = ref('')

const priceBinding = computed({
  get() {
    return price.value
  },
  set(newValue) {
    price.value = newValue
    calculatePrice()
  }
})

const quantityBinding = computed({
  get() {
    return quantity.value
  },
  set(newValue) {
    quantity.value = newValue
    calculatePrice()
  }
})

const calculatePrice = () => {
  if(price.value && quantity.value) {
    const test = price.value * props.totalQuantity / quantity.value
    model.value = test.toFixed(2)
  }
}

</script>