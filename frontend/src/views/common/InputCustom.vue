<template>
  <div :class="['input-custom-group', getSize]">
    <label>
      {{ props.label.toLowerCase() }}
      <span v-if="required">*</span>
    </label>

    <input :type="props.type" :required="required" v-model="model" />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  size: { type: String, default: "" },
  label: { type: String, default: "" },
  type: { type: String, default: "text" },
  required: { type: Boolean, default: false },
});

const model = defineModel();

const getSize = computed(() => (props.size ? "input-" + props.size : ""));
</script>

<style lang="scss">
.input-custom-group {
  display: flex;
  flex-direction: column;
  color: $light;

  label {
    padding-left: 0.2rem;
  }

  label:first-letter {
    text-transform: uppercase;
  }

  input,
  input:focus {
    border: 1px solid $light;
    border-radius: 7px;
    outline: $primary;
    padding: 0.5rem;
  }

  &.input-sm {
    width: 10%;
  }
  &.input-md {
    width: 30%;
  }
  &.input-lg {
    width: 50%;
  }
}
</style>
