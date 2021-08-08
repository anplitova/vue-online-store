<template>
  <article class="product">
    <div class="product__image">
      <img :src="product.image" :alt="product.title">
    </div>
    <div class="product__content">
      <h3 class="product__title">{{ product.title }}</h3>
      <p class="product__category">{{ product.category }}</p>
      <p class="product__description">{{ product.description }}</p>
    </div>
    <div class="product__options">
      <p class="product__price">{{ product.price }}</p>
      <button class="button button--primary product__button" type="button" @click="onEditProduct()">Edit</button>
      <button class="button button--danger product__button" type="button" @click="onRemoveProduct()">Remove</button>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ProductModel from '@models/ProductModel'

export default defineComponent({
  name: 'Product',
  components: {},
  props: {
    product: {
      type: Object as PropType<ProductModel>
    }
  },
  methods: {
    onEditProduct () {
      console.log('edit', this.product)
    },

    onRemoveProduct () {
      console.log('remove', this.product)
    }
  }
})
</script>

<style lang="scss">
.product {
  position: relative;
  display: flex;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background-color: $white;
  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    box-shadow: 0 4px 25px 0 rgb(34, 41, 47, 0.25);
    transform: translateY(-5px);
  }

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  &__image {
    padding: 20px 0 20px 15px;
    flex-shrink: 0;

    img {
      width: 180px;
      height: 180px;
      object-fit: contain;
    }
  }

  &__content {
    width: 100%;
    padding: 20px 15px;
    border-right: 1px solid #cdcdcd;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 4px;
    font-weight: 600;
    font-size: 14px;
    color: $dark-text;
    transition: color 0.3s ease;

    &:hover {
      color: $primary-text;
      cursor: pointer;
    }
  }

  &__category {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 12px;
    color: $dark-text;
  }

  &__description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    // -webkit-box-ordinal-group: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    color: $dark-text;
    margin-top: 0;
    margin-bottom: 0;
  }

  &__options {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
  }

  &__price {
    margin-top: 0;
    margin-bottom: auto;
    font-size: 18px;
    line-height: 36px;
    font-weight: 600;
    color: $primary-button;

    &:before {
      content: '$';
      margin-right: 5px;
    }
  }

  &__button {
    margin-top: 10px;
  }
}
</style>
