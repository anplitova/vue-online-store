<template>
  <slot>
    <input :id="`id-{{ value }}`" class="visually-hidden checkbox" type="checkbox" :name="name" :value="value" :disabled="disabled">
    <label :for="`id-{{ value }}`" class="checkbox__label">{{ label }}</label>
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
