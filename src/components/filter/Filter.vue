<template>
  <div class="filter">
    <h2 class="title filter__title">Filters</h2>
    <slot name="filter"></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Filter'
}
</script>

<style lang="scss">
.filter {
  flex-shrink: 0;
  width: 260px;
  margin-right: 30px;
}
</style>
