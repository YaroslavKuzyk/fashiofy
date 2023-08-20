<template>
  <Carousel :items-to-show="itemsToShow">
    <Slide v-for="slide in sliderItem" :key="slide.title">
      <div class="slide">
        <img class="slide__image" :src="slide.image" :alt="slide.title" />
        <div class="slide__content">
          <h2 v-if="slide.title" class="slide__title">{{ slide.title }}</h2>
          <p v-if="slide.text" class="slide__text">{{ slide.text }}</p>
        </div>
      </div>
    </Slide>
    <template #addons v-if="navigation || pagination">
      <Navigation v-if="navigation" />
      <Pagination v-if="pagination" />
    </template>
  </Carousel>
</template>

<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { type IIntro } from "@/models/config";

const props = defineProps({
  itemsToShow: {
    type: Number,
    default: 1,
  },
  sliderItem: {
    type: Array as PropType<IIntro[]>,
    default: () => [],
  },
  pagination: {
    type: Boolean,
    default: true,
  },
  navigation: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
.slide {
  width: 100%;
  height: 100%;
  position: relative;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
  }

  &__title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  &___text {
    font-size: 1.2rem;
  }
}

.carousel__pagination {
  position: relative;
  margin-top: -30px;
  z-index: 20;
}
</style>

<style lang="scss">
.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: var(--extra-light);
}

.carousel__icon {
  fill: var(--extra-light);
}

.carousel {
  height: 100%;

  &__viewport {
    height: 100%;
  }

  &__track {
    height: 100%;
  }
}
</style>
