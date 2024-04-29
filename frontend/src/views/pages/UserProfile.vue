<template>

  <h2>{{ t('profile.myProfile') }}</h2>

  <div id="profilePage">
    <div class="row items-center q-mb-md">
      <q-icon name="face" size="60px"></q-icon>
      <div class="q-ml-md">
        <div>
          <span class="text-bold">{{ t('profile.registeredAt') }}</span>
          {{ formatedDate(userStore.user.createdAt) }}
        </div>
        <div>
          <span class="text-bold">{{ t('profile.updatedAt') }}</span>
          {{ formatedDate(userStore.user.updatedAt) }}
        </div>
      </div>
    </div>

    <q-form style="width: 50%;">
      <input-custom v-model="userStore.user.name" 
        :label="t('auth.nameField')"
        required>
      </input-custom>

      <input-custom v-model="userStore.user.email" 
        :label="t('auth.emailField')" 
        type="email"
        required>
      </input-custom>
    </q-form>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import InputCustom from '../common/InputCustom.vue';
import { useUserStore } from 'src/stores/user-store';

const userStore = useUserStore()
const {t} = useI18n()

const formatedDate = (date) => {
  const originalDate = new Date(date);
  const day = String(originalDate.getDate()).padStart(2, '0');
  const month = String(originalDate.getMonth() + 1).padStart(2, '0');
  const year = originalDate.getFullYear();
  return `${day}-${month}-${year}`;
}
</script>

<style lang="scss">

#profilePage {
  background-color: white;
  border-radius: 8px;
  padding: 4rem;
}

h2 {
  margin-top: 1.5rem;
  margin-left: 1rem;
}

</style>