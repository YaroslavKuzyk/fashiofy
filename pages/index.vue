<template>
  <div class="home">
    <div class="home-slider">
      <Carousel :sliderItem="configStore.getConfig.intro" />
    </div>
    <div class="home-short-news">
      <ShortNews
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
          <ShortProduct
            v-for="(item, index) in configStore.getConfig.home_products.new"
            :key="index"
            :item="item"
          />
        </div>
        <div v-if="activeTab === 2" class="home-tabs__item">
          <ShortProduct
            v-for="(item, index) in configStore.getConfig.home_products.top"
            :key="index"
            :item="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useConfigStore } from "@/stores/useConfigStore";
import Carousel from "@/components/UIKit/Carousel";
import ShortNews from "@/components/ShortNews";
import ShortProduct from "@/components/ShortProduct";

const configStore = useConfigStore();
const activeTab = ref(1);

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
</style>
