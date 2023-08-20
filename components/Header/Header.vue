<template>
  <header class="header">
    <SalesBar />
    <div class="header__container">
      <ul class="header__navigation">
        <li><nuxt-link to="/">Жіноче</nuxt-link></li>
        <li><nuxt-link to="/">Чоловіче</nuxt-link></li>
        <li><nuxt-link to="/">Дитяче</nuxt-link></li>
        <li><nuxt-link to="/">Нейтральне</nuxt-link></li>
      </ul>
      <Logo text />
      <div class="header__buttons">
        <button class="header__buttons-item"><IconSearch /></button>
        <button class="header__buttons-item"><IconHeart /></button>
        <button class="header__buttons-item"><IconBasket /></button>
        <Button class="header__buttons-item" white>Вхід</Button>
        <Button class="header__buttons-item">Реєстрація</Button>
      </div>
    </div>
    <Navigation />
  </header>
</template>

<script lang="ts" setup>
import Logo from "@/components/UIKit/Logo";
import IconSearch from "@/components/Icon/IconSearch";
import IconHeart from "@/components/Icon/IconHeart";
import IconBasket from "@/components/Icon/IconBasket";
import Button from "@/components/UIKit/Button";
import SalesBar from "@/components/Header/SalesBar";
import Navigation from "@/components/Header/Navigation";
</script>

<style lang="scss" scoped>
.header {
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1158px;
    padding: 32px 24px;
    margin: 0 auto;
  }

  &__navigation {
    display: flex;
    width: 100%;
    max-width: 396px;

    li {
      padding-bottom: 2px;
      margin-right: 28px;
      color: var(--primary);
      font-size: var(--font-xs);
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      border-bottom: 2px solid transparent;
      transition: var(--transition);

      &:hover {
        border-color: var(--danger);
      }
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 396px;
    width: 100%;

    &-item {
      margin-left: 28px;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
