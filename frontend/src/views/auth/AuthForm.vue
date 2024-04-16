<template>
  <div id="registerPage">

    <img src="../../assets/renotracker-logo-notext.png" width="150" class="renotracker-logo" alt="logo">

    <h2>{{ getTitleLabel }}</h2>

    <q-form @submit="submit">

      <input-custom v-if="mode === 'register'" v-model="form.name" 
        :label="t('auth.nameField')"
        required>
      </input-custom>

      <input-custom v-model="form.email" 
        :label="t('auth.emailField')" 
        type="email"
        required>
      </input-custom>

      <input-custom v-model="form.password" 
        :label="t('auth.passwordField')" 
        type="password"
        required>
      </input-custom>

      <q-btn push color="primary" text-color="white" :label="getBtnLabel" type="submit" class="submit-btn"/>

      <div v-if="mode === 'register'" class="already-register">
        <span>{{ t('auth.alreadyRegister') }}</span>
        <router-link class="link" to="/auth/login">{{ t('auth.alreadyRegisterLogin') }}</router-link>
      </div>

      <div v-if="mode === 'login'" class="need-register">
        <span>{{ t('auth.noAccount') }}</span>
        <router-link class="link" to="/auth/register">{{ t('auth.needRegister') }}</router-link>
      </div>

    </q-form>
  </div>

</template>

<script setup>
import { reactive, computed } from "vue";
import { useI18n } from "vue-i18n";
import { api } from "src/boot/axios";
import { useRouter } from 'vue-router'
import InputCustom from "../common/InputCustom.vue";
import { useUserStore } from "src/stores/user-store";

const {t} = useI18n()
const router = useRouter()
const userStore = useUserStore()

const form = reactive({
  name: "",
  email: "",
  password: "",
});

const mode = computed(() => router.currentRoute.value.path === '/auth/register' ? 'register' : 'login')
const getTitleLabel = computed(() =>  mode.value === 'register' ? t('auth.registerTitle') : t('auth.loginTitle'))
const getBtnLabel = computed(() =>  mode.value === 'register' ? t('auth.registerBtn') : t('auth.loginBtn'))

const submit = () => {
  api.post('/api/auth/' + mode.value, form)
    .then(response => {
      if(response.data.token) {
        localStorage.setItem(process.env.AUTH_TOKEN_KEY, response.data.token)
        userStore.initalizeUser()
        window.location = '/user/profile'
      } else {
        router.push('/auth/login')
      }
    })
}

</script>

<style lang="scss">

.q-page-container {
  background-color: white;
}

#registerPage {
  margin: auto;
  margin-top: 5rem;
  width: 35%;

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

  .already-register, .need-register {
    margin-top: 1rem;
    text-align: center;

    .link {
      margin-left: .5rem
    }
  }
}
</style>
