<template>
  <div class="row items-center q-mx-xl">
    <span>{{ t('purchase.link') }}</span>
    <input-custom v-model="value" type="number" size="sm" class="q-mx-sm" dense style="margin-bottom: 0;"></input-custom>
    <span v-if="purchase.unit">{{ `(${purchase.unit})` }}</span>
    <span class="text-bold q-ml-sm">{{ purchase.name }}</span>
    <span class="q-ml-sm">{{ t('purchase.toSubProject') }}</span>
    <span class="text-bold q-ml-sm">{{ subProject.name }}</span>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { useSubProjectStore } from 'src/stores/subProject-store';
import { useRoute } from 'vue-router';
import { debounce } from 'quasar';
import { useI18n } from 'vue-i18n';

import InputCustom from '../common/InputCustom.vue';

const props = defineProps({purchase: Object})
const route = useRoute()
const {t} = useI18n()
const subProjectStore = useSubProjectStore()

const value = ref(0)
const subProject = subProjectStore.getSubProject(route.params.subProjectId)

const test = debounce(() => {
  console.log('coucou')
}, 1500)

</script>