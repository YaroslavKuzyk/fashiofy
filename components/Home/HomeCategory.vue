<template>
  <nuxt-link :to="`/${item.id}`" class="category">
    <img class="category__image" :src="item.image" :alt="item.title" />
    <p class="category__title">{{ item.title }}</p>
  </nuxt-link>
</template>

<script lang="ts" setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 220px;
  width: 100%;
  margin: 0 auto;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    font-size: var(--font-sm);
    line-height: 28px;
    font-weight: 700;
    color: var(--primary);
    margin-top: 8px;
  }
}
</style>
