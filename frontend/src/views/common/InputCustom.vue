<template>
  <div :class="['input-custom-group', getSize]">
    <label>
      {{ props.label.toLowerCase() }}
      <span v-if="required">*</span>
    </label>

    <textarea v-if="type === 'textarea'"  
      v-model="modelBinding" 
      :placeholder="placeholder"
      class="input-custom" />

    <select v-else-if="type === 'select'" v-model="modelBinding" class="input-custom">
      <option v-for="option in options" :key="option.key" :value="option.value">
        <slot name="option" :option="option">{{ option.key }}</slot>
      </option>
    </select>

    <input v-else 
      :type="props.type" 
      :required="required" 
      v-model="modelBinding" 
      :placeholder="placeholder"
      class="input-custom"/>

  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  size: { type: String, default: "" },
  label: { type: String, default: "" },
  type: { type: String, default: "text" },
  options: Array,
  placeholder: { type: String, default: "" },
  required: { type: Boolean, default: false },
});

const model = defineModel();

const modelBinding = computed({
  get() {
    return model.value
  },
  set(newValue) {
    model.value = newValue
  }
})

const getSize = computed(() => (props.size ? "input-" + props.size : ""));
</script>

<style lang="scss">
.input-custom-group {
  display: flex;
  flex-direction: column;
  color: $light;
  margin-bottom: 1rem;

  label {
    padding-left: 0.2rem;
  }

  label:first-letter {
    text-transform: uppercase;
  }

  .input-custom,
  .input-custom:focus {
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
