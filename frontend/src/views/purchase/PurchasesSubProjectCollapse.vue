<template>
  <div class="row items-center q-mx-xl">
    <span>{{ t('purchase.link') }}</span>
    <input-custom v-model="dataBinding" type="number" size="sm" class="q-mx-sm" dense style="margin-bottom: 0;"></input-custom>
    <span v-if="purchase.unit">{{ `(${purchase.unit})` }}</span>
    <span class="text-bold q-ml-sm">{{ purchase.name }}</span>
    <span class="q-ml-sm">{{ t('purchase.toSubProject') }}</span>
    <span class="text-bold q-ml-sm">{{ subProject.name }}</span>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useSubProjectStore } from 'src/stores/subProject-store';
import { useRoute } from 'vue-router';
import { debounce } from 'quasar';
import { useI18n } from 'vue-i18n';
import { api } from 'src/boot/axios';

import InputCustom from '../common/InputCustom.vue';

const props = defineProps({purchase: Object})
const route = useRoute()
const {t} = useI18n()
const subProjectStore = useSubProjectStore()

const subProject = subProjectStore.getSubProject(route.params.subProjectId)

const data = reactive({
  _subProjectId: route.params.subProjectId,
  _purchaseId: props.purchase._id,
  quantity: 0
})

const dataBinding = computed({
  get: () => data.quantity,
  set(newValue) {
    data.quantity = newValue
    submit()
  }
})

const submit = debounce(() => {
  const mode = !data.quantity || data.quantity === 0 ? 'detach' : 'attach'
  api.post('/api/subProject/purchase/' + mode, data)
    .then(response => {
      if(mode === 'attach') {
        console.log('attached', response.data)
      } else {
        console.log('detached', response.data)
      }
    })
    .catch(error => console.error(error))
}, 1000)

</script>