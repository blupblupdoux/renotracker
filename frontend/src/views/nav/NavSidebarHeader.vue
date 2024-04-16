<template>

<div id="SidebarHeader">
  <div class="row items-center q-mb-sm">
    <q-icon name="face" size="35px"></q-icon>
    <div class="q-ml-sm text-weight-bold text-h6">Sarah B</div>
  </div>

  <router-link to="/user/profile" class="link">{{ t('nav.profile') }}</router-link>
</div>

</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>

<style lang="scss" scoped>
#SidebarHeader {
  padding: 1.5rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.link {
  font-size: 0.7rem;
}
</style>