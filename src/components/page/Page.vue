<template>
  <div class="page">
    <header class="page__header">
      <slot name="header"/>
    </header>
    <main class="page__main">
      <slot name="content"/>
    </main>
    <footer class="page__footer">
      <slot name="footer"/>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Page'
}
</script>

<style lang="scss">
.page {
  &__wrapper {
    display: flex;
    width: 1280px;
    margin-right: auto;
    margin-left: auto;
    padding: 40px 20px;
    box-sizing: border-box;
  }
}
</style>
