<template>
  <div class="catalog">
    <h2 class="title catalog__title">{{ products.length }} results found</h2>
    <div :class="`catalog-list type--${type}`">
      <Product v-for="product of products" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Product from '@components/product/Product.vue'
import ProductModel from '@models/ProductModel'

export default defineComponent({
  name: 'Catalog',
  components: {
    Product
  },
  props: {
    products: {
      type: [] as PropType<ProductModel>,
      default: []
    }
  },
  data () {
    return {
      type: {
        type: String,
        default: 'list'
      }
    }
  }

})
</script>

<style lang="scss">
</style>
