<template>
  <div id="registerPage">

    <img src="../../assets/renotracker-logo-notext.png" width="150" class="renotracker-logo" alt="logo">

    <h2>{{ t('auth.registerTitle') }}</h2>

    <q-form @submit="register">
      <input-custom v-model="form.name" 
        :label="t('auth.nameField')"
        required>
      </input-custom>

      <input-custom v-model="form.email" 
        :label="t('auth.emailField')" 
        required>
      </input-custom>

      <input-custom v-model="form.password" 
        :label="t('auth.passwordField')" 
        required>
      </input-custom>

      <input-custom v-model="form.password_confirmation" 
        :label="t('auth.passwordConfirmField')"
        required>
      </input-custom>

      <q-btn push color="primary" text-color="white" :label="t('auth.registerBtn')" type="submit" class="submit-btn"/>
    </q-form>
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

const register = () => {
  console.log('coucou')
}
</script>

<style lang="scss" scoped>

#registerPage {
  margin: auto;
  margin-top: 5rem;
  width: 35%;
}

.renotracker-logo {
  position: absolute; 
  top: .5rem; 
  left: 1rem;
}

#registerPage h2 {
  margin-top: 0;
  color: $primary;
  font-weight: 400;
  font-size: xxx-large
}

.input-custom-group {
  margin-bottom: 1rem;
}

.submit-btn {
  margin-top: .5rem;
  width: 100%;
  padding: 0.5rem;
}
</style>
