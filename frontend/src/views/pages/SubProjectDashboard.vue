<template>
  <div class="row items-center">
    <h3 class="col-12">{{ projectStore.currentProject.name }}</h3>
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
import PurchasesTable from '../purchase/PurchasesTable.vue';

const props = defineProps({subProjectId: String})

const projectStore = useProjectStore()
const subProjectStore = useSubProjectStore()

const subProject = computed(() => subProjectStore.currentSubProject(props.subProjectId))
const projectName = compu

const test = ref([])

// onMounted(() => {
//   api.get('/api/purchase/all', {params: {projectId: projectStore.currentProjectId}})
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