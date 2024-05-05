<template>
  <router-link :to="'/project/' + project._id" class="card project-card column justify-around">
    <div class="project-card-title sub-title text-dark">{{ project.name }}</div>
    <div class="project-card-description txt-light">{{ project.description }}</div>
    <div class="project-card-budget">{{ budgetFormatted(project.budget) }}</div>
  </router-link>
</template>

<script setup>
import { currencyBeautiful } from 'src/composables/Formatter'

const props = defineProps({project: Object})

const budgetFormatted =  (budget) => currencyBeautiful(budget)
</script>

<style lang="scss">
.project-card {
  margin-bottom: 1rem;
  width: 49%;
  height: 10rem;
  text-decoration: none;
}

.project-card-title {
  text-align: center;
}

.project-card-description {
  text-align: center;
}

.project-card-budget {
  text-align: center;
  font-size: 1.1rem;
  color: $primary;
  font-weight: 500;
}
</style>