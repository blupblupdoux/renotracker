<template>
  <div id="registerPage">

    <img src="../../assets/renotracker-logo-notext.png" width="150" class="renotracker-logo" alt="logo">

    <h2>{{ t('auth.registerTitle') }}</h2>

    <form>
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
    </form>
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

<style lang="scss" scoped>

#registerPage {
  margin-top: 5rem;
}

.renotracker-logo {
  position: absolute; 
  top: .5rem; 
  left: 1rem;
}

#registerPage h2 {
  text-align: center;
  margin-top: 0;
  color: $primary;
  font-weight: 400;
}

form {
  margin: auto;
  width: 35%;
}

.input-custom-group {
  margin-bottom: 1rem;
}
</style>
