<template>
  <div class="row justify-between txt-light" style="width: 100%">
    <span>{{ totalLabel }}</span>
    <span>{{ spentLabel }}</span>
  </div>

  <q-linear-progress rounded size="30px" :value="progressValue" color="negative" />
</template>

<script setup>
import { currencyBeautiful } from 'src/composables/Formatter'
import { useI18n } from 'vue-i18n';
import {computed} from 'vue'

const props = defineProps({total: Number, spent: Number})
const {t} = useI18n()

const progressValue = computed(() => props.spent / props.total )
const totalLabel = computed(() => t('budget.total') + currencyBeautiful(props.total))
const spentLabel = computed(() => t('budget.remaining') + currencyBeautiful(props.spent))

</script>