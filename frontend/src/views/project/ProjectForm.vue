<template>
  <right-drawer :title="t('project.createProject')">
    <q-form>
      <input-custom v-model="form.name" 
        :label="t('auth.nameField')"
        required>
      </input-custom>

      <input-custom v-model="form.description" 
        :label="t('project.descriptionField')"
        type="textarea"
      >
      </input-custom>

      <input-custom v-model="form.budget" 
        :label="t('project.budgetField')"
      >
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

const {t} = useI18n()

const form = reactive({
  _userId: "",
  name: "",
  description: "",
  budget: ""
});
</script>