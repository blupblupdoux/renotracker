<template>
  <div class="row items-center">
    <h3 class="col-12">{{ projectStore.getProject(route.params.projectId).name }}</h3>
    <h2 class="col-12">{{ subProject.name }}</h2>
    <div class="col-7">coucou</div>

    <div class="sub-project-purchase q-pa-md q-pb-lg col-5">
      <h3 class="q-ml-sm q-mb-sm">Achats</h3>
      <purchases-table :purchases="test" :columns-excluded="['category', 'shop']"></purchases-table>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue'
import { useProjectStore } from 'src/stores/project-store';
import { api } from 'src/boot/axios';
import { useSubProjectStore } from 'src/stores/subProject-store';
import { useRoute } from 'vue-router';
import PurchasesTable from '../purchase/PurchasesTable.vue';

const route = useRoute()
const projectStore = useProjectStore()
const subProjectStore = useSubProjectStore()

const subProject = computed(() => subProjectStore.getSubProject(route.params.subProjectId))

const test = ref([])

// onMounted(() => {
//   api.get('/api/purchase/project/' + route.params.projectId + '/all')
//     .then(response => test.value = response.data)
//     .catch(error => console.error(error))
// })
</script>

<style lang="scss">
.sub-project-purchase {
  background-color: white;
  border-radius: 8px;
}
</style>