<template>
  <right-drawer v-model="model" :title="t('project.createProject')">
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
import { useUserStore } from "src/stores/user-store";
import { api } from 'src/boot/axios'
import { useProjectStore } from 'src/stores/project-store';

const {t} = useI18n()
const userStore = useUserStore()
const projectStore = useProjectStore()

const model = defineModel()

const formObject = {
  _userId: "",
  name: "",
  description: "",
  budget: ""
}
const form = reactive({...formObject});

const submit = () => {
  form._userId = userStore.user._id
  api.post('/api/projects/create', form)
    .then(response => {
      projectStore.addProjectToList(response.data)
      Object.assign(form, formObject);
      model.value = false
    })
    .catch(error => console.error(error))
}
</script>