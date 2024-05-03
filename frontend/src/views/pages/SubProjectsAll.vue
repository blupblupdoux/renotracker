<template>
  <h2>{{ t('nav.subProjects') }}</h2>

  <search-bar v-model="query" 
    :placeholder="t('common.search')" 
    :btnLabel="t('subProject.newSubProjectBtn')"
    @on-btn-click="xx">
  </search-bar>

  <div class="row justify-between">
    <sub-project-card v-for="subProject in subProjectsFiltered" 
      :key="'subProject-card-' + subProject._id"
      :sub-project="subProject">
    </sub-project-card>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue'

import SearchBar from '../common/SearchBar.vue'
import SubProjectCard from '../subProject/SubProjectCard.vue'

const {t} = useI18n()

let query = ref('')

const subProjectsFiltered = [{}]

// const subProjectsFiltered = computed(() => {
//   if(!query.value) return xx
//   return xx.filter(subProject => subProject.name.toLowerCase().includes(query.value.toLocaleLowerCase()))
// })
</script>