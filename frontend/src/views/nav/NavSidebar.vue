<template>
<q-drawer
  :show-if-above="drawer"
  :width="200"
  :breakpoint="400"
  
  class="column justify-between"
  style="box-shadow: -4px 0px 8px -2px #000000;"
>

  <div>
    <nav-sidebar-header></nav-sidebar-header>
    
    <q-list padding>
      <nav-sidebar-item v-for="item in mainItems" 
        :key="'mainItem-' + item.label"
        :item="item">
      </nav-sidebar-item>
    </q-list>

    <div style="border-bottom: 1px solid rgba(0, 0, 0, 0.12)"></div>

    <q-list padding>
      <nav-sidebar-item v-for="item in specificsItems" 
        :key="'specificsItems-' + item.label"
        :item="item">
      </nav-sidebar-item>
    </q-list>
  </div>
  
  <img src="../../assets/renotracker-logo-linear-trim.png" class="sidebar-logo" />
</q-drawer>
</template>

<script setup>
import NavSidebarHeader from './NavSidebarHeader.vue';
import NavSidebarItem from './NavSidebarItem.vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n()
const route = useRoute()

// Display or not the menu
const drawer = computed(() => !route.path.includes('auth') && route.name !== 'notFound')

const mainItems = [
  {label: t('nav.projects'), link: "", icon: "r_handyman"},
  {label: t('nav.tools'), link: "", icon: "r_build"},
]

const specificsItems = [
  {label: t('nav.dashboard'), link: "", icon: "r_dashboard"},
  {label: t('nav.subProjects'), link: "", icon: "chair"},
  {label: t('nav.purchases'), link: "", icon: "shopping_cart"},
  {label: t('nav.tags'), link: "", icon: "tag"},
  {label: t('nav.stats'), link: "", icon: "r_signal_cellular_alt"},
  {label: t('nav.settings'), link: "", icon: "r_settings"},
]
</script>

<style scoped>
.sidebar-logo {
  width: 60%;
  margin: 0 auto;
  display: block;
  margin-bottom: 1rem;
}
</style>
