<template>
  <div v-if="isReady">
    <q-layout >
      <nav-sidebar> </nav-sidebar>

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
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter()
const isReady = ref(false)

onMounted(() => {
  router.isReady().then(() => isReady.value = true)
})
</script>
