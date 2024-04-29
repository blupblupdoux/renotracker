<template>
  <q-drawer
    v-model="model"
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

const props = defineProps({title: String})
const model = defineModel()

const closeDrawer = () => {
  model.value = false
}
</script>
