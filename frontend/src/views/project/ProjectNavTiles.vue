<template>
  <div class="row justify-between q-mt-lg">
    <nav-tile v-for="item in items" 
      :key="'project-nav-tile-' + item.icon" 
      :title="item.label" 
      :icon="item.icon">
    </nav-tile>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

import NavTile from '../common/NavTile.vue';

const {t} = useI18n()
const items = [
  {label: t('project.subProjects'), icon: 'dns'},
  {label: t('project.products'), icon: 'shopping_cart'},
  {label: t('project.stats'), icon: 'r_bar_chart'},
  {label: t('project.projectParams'), icon: 'settings'},
]

</script>

<style>
.nav-tile {
  width: 24%;
  height: 12rem;
}
</style>