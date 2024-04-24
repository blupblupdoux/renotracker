<template>
  <div class="project-card">
    <div class="project-card-title">{{ project.name }}</div>
    <div class="project-card-description">{{ project.description }}</div>
    <div class="project-card-budget">{{ project.budget }}</div>
  </div>
</template>

<script setup>
const props = defineProps({project: Object})
</script>

<style>
.project-card {
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 40%;
}
</style>