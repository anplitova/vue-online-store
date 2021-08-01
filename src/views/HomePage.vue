<template>
  <Page>
    <template #content>
      <div class="page__wrapper">
        <aside class="aside">
          <Filter></Filter>
        </aside>
        <section class="results">
          <Product v-for="item of products" :key="item.id" :item="item" @click-favourite-button="updateFavouriteProduct($event)"/>
        </section>
      </div>
    </template>
  </Page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Page from '@components/page/Page.vue'
import Filter from '@components/filter/Filter.vue'
import Product from '@components/product/Product.vue'
import ProductModel from '@models/ProductModel'
import ProductUtils from '@utils/product'

export default defineComponent({
  name: 'HomePage',
  components: {
    Page,
    Filter,
    Product
  },
  data () {
    return {
      products: [] as ProductModel[],
      favouriteProducts: [] as any,
      loading: false
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      this.loading = true
      fetch('https://fakestoreapi.com/products')
        .then((response: any) => response.json())
        .then((result: Array<ProductModel>) => {
          this.products = ProductUtils.setFavouriteProducts(result, this.favouriteProducts)
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.loading = false
        })
    },
    updateFavouriteProduct (id: number) {
      this.favouriteProducts = ProductUtils.updateFavouriteProducts(id, this.favouriteProducts)
      this.products = ProductUtils.setFavouriteProducts(this.products, this.favouriteProducts)
    }
  }
})
</script>

<style lang="scss">
.aside {
  width: 360px;
  margin-right: 40px;
}

.results {
  width: 840px;
}
</style>
