<template>
  <div class="project-card column justify-around">
    <div class="project-card-title">{{ project.name }}</div>
    <div class="project-card-description">{{ project.description }}</div>
    <div class="project-card-budget">{{ budgetFormatted(project.budget) }}</div>
  </div>
</template>

<script setup>
const props = defineProps({project: Object})
const budgetFormatted =  (budget) => new Intl.NumberFormat('fr-fr', { style: 'currency', currency: 'EUR' }).format(budget)
</script>

<style lang="scss">
.project-card {
  background-color: white;
  border-radius: 8px;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  width: 49%;
  height: 10rem
}

.project-card-title {
  font-size: 1.3rem;
  font-weight: 400;
  text-align: center;
}

.project-card-description {
  font-weight: 300;
  color: $light;
  text-align: center;
}

.project-card-budget {
  text-align: center;
  font-size: 1.1rem;
  color: $primary;
  font-weight: 500;
}
</style>