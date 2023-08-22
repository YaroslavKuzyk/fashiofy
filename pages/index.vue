<template>
  <div class="home">
    <div class="home-slider">
      <Carousel :sliderItem="configStore.getConfig.intro" />
    </div>
    <div class="home-short-news">
      <HomeNews
        v-for="(item, index) in configStore.getConfig.short_news"
        :key="index"
        :item="item"
      />
    </div>
    <div class="home-tabs">
      <div class="home-tabs__header">
        <button
          class="home-tabs__button"
          :class="{ 'home-tabs__button--active': activeTab === 1 }"
          @click="activeTab = 1"
        >
          Нове
        </button>
        <button
          class="home-tabs__button"
          :class="{ 'home-tabs__button--active': activeTab === 2 }"
          @click="activeTab = 2"
        >
          Топ
        </button>
      </div>
      <div class="home-tabs__content">
        <div v-if="activeTab === 1" class="home-tabs__item">
          <HomeProduct
            v-for="(item, index) in getNewHomeProducts"
            :key="index"
            :item="item"
          />
        </div>
        <div v-if="activeTab === 2" class="home-tabs__item">
          <HomeProduct
            v-for="(item, index) in getTopHomeProducts"
            :key="index"
            :item="item"
          />
        </div>
      </div>
    </div>
    <div class="home-section">
      <div class="home-section__header">
        <h2 class="home-title">Топ-Категорії</h2>
        <nuxt-link class="home-section__link" to="/">Показати більше</nuxt-link>
      </div>
      <div class="home-section__content">
        <HomeCategory
          v-for="item in getTopCategories"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>

    <div class="home-section home-section--brends">
      <div class="home-section__header">
        <h2 class="home-title">Наші Бренди</h2>
      </div>
      <Carousel
        :sliderItem="configStore.getConfig.brends"
        :itemsToShow="2"
        :pagination="false"
      />
    </div>

    <div class="home-section home-section--lookbook">
      <div class="home-section__header">
        <h2 class="home-title">Наші Бренди</h2>
      </div>
      <div class="home-section__single-slider">
        <Carousel
          class=""
          :sliderItem="configStore.getConfig.brends"
          :itemsToShow="1"
          :pagination="false"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useConfigStore } from "@/stores/useConfigStore";
import Carousel from "@/components/UIKit/Carousel";
import HomeNews from "@/components/Home/HomeNews";
import HomeProduct from "@/components/Home/HomeProduct";
import HomeCategory from "@/components/Home/HomeCategory";

const configStore = useConfigStore();
const activeTab = ref(1);

const getNewHomeProducts = computed(() => {
  if (!configStore?.getConfig?.home_products?.new) [];
  return configStore?.getConfig?.home_products?.new;
});

const getTopHomeProducts = computed(() => {
  if (!configStore?.getConfig?.home_products?.top) [];
  return configStore?.getConfig?.home_products?.top;
});

const getTopCategories = computed(() => {
  if (!configStore?.getConfig?.top_categories) [];
  return configStore?.getConfig?.top_categories;
});

onMounted(async () => {
  await configStore.fetchConfig();
});
</script>

<style lang="scss" scoped>
.home {
  max-width: 1158px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
}

.home-slider {
  height: 437px;
  padding: 40px 0;
}

.home-short-news {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 80px;
}

.home-tabs {
  margin-bottom: 80px;

  &__header {
    display: flex;
    justify-content: center;
    padding: 0 24px 40px;
    gap: 40px;
  }

  &__button {
    color: var(--extra-dark);
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    border-bottom: 2px solid transparent;
    padding-bottom: 4px;
    transition: var(--transition);

    &--active {
      color: var(--danger);
      border-bottom: 2px solid var(--danger);
    }
  }

  &__item {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }
}

.home-title {
  color: var(--extra-dark);
  font-size: var(--font-lg);
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 4px;
}

.home-section {
  margin-bottom: 80px;

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }

  &__link {
    color: var(--danger);
    font-size: var(--font-xs);
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: reapeat(2, 1fr);
    gap: 36px;
  }
}

.home-section__single-slider {
  height: 560px;
}
</style>
<style lang="scss">
.home-section--brends {
  .carousel__slide--active {
    padding-right: 12px;
  }

  .carousel__slide--next {
    padding-left: 12px;
  }
}
</style>
