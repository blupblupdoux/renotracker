<template>
  <div class="row items-center">
    <h3 class="col-12">{{ project.name }}</h3>
    <h2 class="col-12">{{ subProject.name }}</h2>
    <div class="col-7">coucou</div>

    <purchases-sub-project class="col-5"></purchases-sub-project>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import { useProjectStore } from 'src/stores/project-store';
import { api } from 'src/boot/axios';
import { useSubProjectStore } from 'src/stores/subProject-store';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

import PurchasesSubProject from '../purchase/PurchasesSubProject.vue';

const route = useRoute()
const {t} = useI18n()
const projectStore = useProjectStore()
const subProjectStore = useSubProjectStore()

const subProject = computed(() => subProjectStore.getSubProject(route.params.subProjectId))
const project = computed(() => projectStore.getProject(route.params.projectId))

</script>

<style lang="scss">
.sub-project-purchase {
  background-color: white;
  border-radius: 8px;
}
</style>