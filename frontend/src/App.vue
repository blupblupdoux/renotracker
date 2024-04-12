<template>
  <div>
    <q-layout>
      <nav-sidebar></nav-sidebar>

      <q-page-container>
        <q-page padding>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import NavSidebar from './views/nav/NavSidebar.vue'
</script>
