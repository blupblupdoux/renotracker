<template>
  <right-drawer v-model="model" :title="t('subProject.createSubProject')">
    <q-form @submit="submit">
      <input-custom v-model="form.name" 
        :label="t('auth.nameField')"
        required>
      </input-custom>

      <input-custom v-model="form.description" 
        :label="t('project.descriptionField')"
        type="textarea">
      </input-custom>

      <input-custom v-model="form.budget" 
        :label="t('project.budgetField') + ' (€)'"
        type="number">
      </input-custom>

      <input-custom v-model="form.priority"
        type="select"
        :label="t('subProject.priority')"
        :options="priority"
      >
        <template #option="data">{{ t('subProject.priority_' + data.option.key) }}</template>
      </input-custom>

      <div class="row justify-end q-pt-md">
        <q-btn push color="primary" text-color="white" :label="t('common.createBtn')" type="submit"/>
      </div>
    </q-form>
  </right-drawer>
</template>

<script setup>
import RightDrawer from '../common/RightDrawer.vue'
import InputCustom from '../common/InputCustom.vue'

import {reactive} from 'vue'
import { useI18n } from "vue-i18n";
import { api } from 'src/boot/axios'
import { useProjectStore } from 'src/stores/project-store';
import { useSubProjectStore } from 'src/stores/subProject-store';
import { priority } from '../../../../constantes/dbFieldsOptions.js'

const {t} = useI18n()
const projectStore = useProjectStore()
const subProjectStore = useSubProjectStore()
const model = defineModel()

const form = reactive({});

const submit = () => {
  form._projectId = projectStore.currentProjectId
  api.post('/api/subProject/create', form)
    .then(response => {
      subProjectStore.addSubProjectToList(response.data)
      model.value = false
    })
    .catch(error => console.error(error))
}
</script>