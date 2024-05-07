<template>
  <router-link :to="'/subProject/' + subProject._id" class="col-12 col-md-6 col-lg-4 q-px-sm" style="  text-decoration: none;">
    <div class="subProject-card card column items-stretch justify-between">
      <div class="sub-title text-dark q-mb-md">{{ subProject.name }}</div>
      <div class="txt-light q-mb-md">{{ getDescription }}</div>
      <div class="row justify-between">
        <div class="text-body1">
          <span class="text-bold">{{ currencyBeautiful(500) }}</span> / <span>{{ currencyBeautiful(subProject.budget) }}</span>
        </div>
        <div :class="'subProject-status ' + getStatusColor">{{ t('subProject.status_' + getStatus.key) }}</div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { currencyBeautiful } from 'src/composables/Formatter'
import { status } from '../../../../constantes/dbFieldsOptions.js'
import { useI18n } from 'vue-i18n';
import { computed } from 'vue'

const props = defineProps({subProject: Object})
const {t} = useI18n()

const getDescription = computed(() => props.subProject.description || t('subProject.noDescription'))
const getStatus = computed(() => status.filter(item => item.value === props.subProject.status)[0])
const getStatusColor = computed(() => 'bg-' + getStatus.value.color)

</script>

<style lang="scss">
.subProject-card {
  margin-bottom: 1rem;
  min-height: 10rem;
  color: $dark;
  cursor: pointer;
}
.subProject-status {
  border-radius: 5px;
  padding: .2rem .5rem;
  color: white;
  font-weight: 400;
}
</style>