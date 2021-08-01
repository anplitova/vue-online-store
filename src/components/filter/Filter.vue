<template>
  <div class="filter">
    <h2 class="title filter__title">Фильтр</h2>
    <slot name="filter"></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Filter'
}
</script>

<style lang="scss"></style>
