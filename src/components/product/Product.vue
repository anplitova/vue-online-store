<template>
  <article class="product">
    <button :class="['product__favourite', {'product__favourite--active': item.favourite}]" type="button" @click="handleClickFavouriteButton">
      <HeartIcon/>
    </button>
    <div class="product__image">
      <img :src="item.image" :alt="item.title">
    </div>
    <div class="product__content">
      <h2 class="product__title">{{ item.title }}</h2>
      <div class="product__category">{{ item.category }}</div>
      <div class="product__price">{{ item.price }}</div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductModel from '@models/ProductModel'
import HeartIcon from '@icons/HeartIcon.vue'

export default defineComponent({
  name: 'Product',
  components: {
    HeartIcon
  },
  props: {
    item: {} as any
  },
  methods: {
    handleClickFavouriteButton () {
      this.$emit('click-favourite-button', this.item.id)
    }
  }
})
</script>

<style lang="scss">
.product {
  position: relative;
  display: flex;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background-color: $white;

  &__image {
    padding: 20px;
    flex-shrink: 0;

    img {
      width: 180px;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    width: 100%;
    padding: 20px;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 32px;
    color: $main-blue;
    transition: color 0.3s ease;

    &:hover {
      color: $light-blue;
      cursor: pointer;
    }
  }

  &__category {}

  &__price {
    margin-bottom: 22px;
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
    color: #444444;

    &:before {
      content: '$';
      margin-right: 5px;
    }
  }

  &__favourite {
    @include reset-button;
    position: absolute;
    top: 20px;
    left: 20px;
    line-height: 0;

    & svg {
      & path {
        stroke: $light-blue;
        transition: stroke 0.3s ease;
      }

      fill: transparent;
      transition:
        fill 0.3s ease,
        transform 0.3s ease;
    }

    &:hover svg {
      transform: scale(1.1);
    }

    &:active svg {
      fill: $dark-blue;
      transform: scale(0.9);

      & path {
        stroke: $dark-blue;
      }
    }

    &--active {
      & svg {
        fill: $light-blue;
      }
    }
  }
}
</style>
