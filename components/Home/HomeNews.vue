<template>
  <div class="short-news">
    <h4 class="short-news__title">{{ item.title }}</h4>
    <nuxt-link :to="`/${item.id}`" class="short-news__link"
      >Детальніше</nuxt-link
    >
  </div>
</template>

<script lang="ts" setup>
import { type IShortNews } from "@/models/config";
const props = defineProps({
  item: {
    type: Object as PropType<IShortNews>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.short-news {
  max-width: 207px;
  width: 100%;

  &__title {
    color: var(--extra-dark);
    font-size: var(--font-xs);
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.2px;
  }

  &__link {
    display: block;
    color: var(--danger);
    font-size: var(--font-xxs);
    font-weight: 500;
    line-height: 140%;
    margin-top: 4px;
    transition: var(--transition);

    &:hover {
      color: var(--secondary);
    }
  }
}
</style>
