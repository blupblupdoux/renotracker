<template>
<q-drawer
  v-model="drawer"
  show-if-above
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

const mainItems = [
  {label: "Mes projets", link: "", icon: "r_handyman"},
  {label: "Outils", link: "", icon: "r_build"},
]

const specificsItems = [
  {label: "Dashboard projet", link: "", icon: "r_dashboard"},
  {label: "Sous projet", link: "", icon: "chair"},
  {label: "Achats", link: "", icon: "shopping_cart"},
  {label: "Tags", link: "", icon: "tag"},
  {label: "Statistiques", link: "", icon: "r_signal_cellular_alt"},
  {label: "Paramètres", link: "", icon: "r_settings"},
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
