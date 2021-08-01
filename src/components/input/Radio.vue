<template>
  <slot>
    <input :id="`id-{{ value }}`" class="visually-hidden radio" type="radio" :name="name" :value="value" :disabled="disabled">
    <label :for="`id-{{ value }}`" class="radio__label">{{ label }}</label>
  </slot>
</template>

<script lang="ts">
export default {
  name: 'Checkbox',
  props: {
    name: String,
    value: String,
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss"></style>
