<template>
  <nuxt-link :to="`/${item.id}`" class="product">
    <img class="product__image" :src="item.image" />
    <h5 class="product__brend">{{ item.brend }}</h5>
    <h3 class="product__title">{{ item.title }}</h3>
    <span class="product__price">{{ item.price }}₴</span>
    <p class="product__category">{{ item.category }}</p>
  </nuxt-link>
</template>

<script lang="ts" setup>
import { type IShortProduct } from "@/models/config";

const props = defineProps({
  item: {
    type: Object as PropType<IShortProduct>,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 270px;
  width: 100%;

  &__image {
    height: 350px;
    object-fit: cover;
  }

  &__brend {
    font-size: var(--font-xxs);
    line-height: 16px;
    color: var(--semi-primary);
    text-align: center;
  }

  &__title {
    font-size: var(--font-sm);
    color: var(--extra-dark);
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.3px;
    text-align: center;
  }

  &__price {
    text-align: center;
    font-size: var(--font-xs);
    color: var(--extra-dark);
  }

  &__category {
    text-align: center;
    font-size: var(--font-xxs);
    line-height: 16px;
    color: var(--button-text);
  }
}
</style>
