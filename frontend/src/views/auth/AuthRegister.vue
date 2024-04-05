<template>
  <div style="padding: 2rem">
    <h2>{{ t('auth.registerTitle') }}</h2>

    <input-custom v-model="form.name" 
      :label="t('auth.nameField')" 
      size="md" 
      required>
    </input-custom>

    <input-custom v-model="form.email" 
      :label="t('auth.emailField')" 
      size="md" 
      required>
    </input-custom>

    <input-custom v-model="form.password" 
      :label="t('auth.passwordField')" 
      size="md" 
      required>
    </input-custom>

    <input-custom v-model="form.password_confirmation" 
      :label="t('auth.passwordConfirmField')"
      size="md" 
      required>
    </input-custom>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
import InputCustom from "../common/InputCustom.vue";

const {t} = useI18n()

let form = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
</script>

<style scoped>
.input-custom-group {
  margin-bottom: 1rem;
}
</style>
