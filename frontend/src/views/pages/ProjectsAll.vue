<template>
 <project-form></project-form>
</template>

<script setup>
import { onMounted } from 'vue';
import ProjectForm from '../project/ProjectForm.vue'
import { api } from 'src/boot/axios';

onMounted(() => {
  api.get('/api/project/all')
    .then(response => {
      console.log(response.data)
    })
})
</script>