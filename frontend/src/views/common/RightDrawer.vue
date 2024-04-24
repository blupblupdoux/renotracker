<template>
  <q-drawer
    v-model="drawer"
    :width="400"
    :breakpoint="500"
    side="right"
    overlay
  >
    <div class="q-pa-lg">

      <!-- Drawer header -->
      <div class="row items-center q-mb-lg">

        <!-- Close button -->
        <q-icon name="r_arrow_back_ios" 
          size="30px" 
          color="primary" 
          class="cursor-pointer q-mr-md" 
          @click="closeDrawer">
        </q-icon>

        <h3>{{ title }}</h3>
      </div>

      <!-- Drawer content -->
      <slot></slot>
    </div>
  </q-drawer>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({title: String})

const closeDrawer = () => {
  console.log('CLOSE DRAWER')
}

let drawer = ref(true)
</script>
