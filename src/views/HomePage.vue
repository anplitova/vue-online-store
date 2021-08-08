<template>
  <Page>
    <template #content>
      <div class="page__wrapper">
        <Filter/>
        <Catalog :products="products"/>
      </div>
    </template>
  </Page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Page from '@components/page/Page.vue'
import Filter from '@/components/filter/Filter.vue'
import Catalog from '@/components/product/Catalog.vue'
import ProductModel from '@models/ProductModel'
import ProductUtils from '@utils/product'

export default defineComponent({
  name: 'HomePage',
  components: {
    Page,
    Filter,
    Catalog
  },
  data () {
    return {
      products: [] as ProductModel[],
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
          this.products = result
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.loading = false
        })
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
