<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__col" v-for="item in getFooterLinks" :key="item.title">
        <p class="footer__col-title">
          {{ item.title }}
        </p>
        <ul class="footer__col-list">
          <li
            class="footer__col-item"
            v-for="link in item.links"
            :key="link.title"
          >
            <nuxt-link to="/" class="footer__col-link">
              <component
                v-if="link.component"
                :is="link.component"
                class="footer__col-link"
              />
              <span v-if="link.link">{{ link.title }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="footer__col">
        <div class="footer__col-title footer__col-title--sm">
          Не пропустіть розпродаж!
        </div>
        <div class="footer__col-text">
          Підпишіться на стильну розсилку від FASHIOFY, щоб отримати
          пріоритетний доступ до розпродажу та ексклюзивним новинкам.
        </div>
        <input
          v-model="email"
          class="footer__col-input"
          type="text"
          placeholder="Ваш email"
        />
        <button class="footer__col-button" :disabled="!checkbox || !email">
          Підписатись
        </button>
        <Checkbox
          class="footer__col-checkbox"
          v-model:model="checkbox"
          id="footer"
        >
          <template #text>
            <span class="footer__col-checkbox--text">Я приймаю умови</span>
          </template>
        </Checkbox>
      </div>
    </div>
    <div class="footer__bottom">
      <nuxt-link to="/">Політика конфіденційності</nuxt-link>
      <span>© Copyright Fashiofy, 2023</span>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import IconPhone from "@/components/Icon/IconPhone";
import IconMail from "@/components/Icon/IconMail";
import IconInstagram from "@/components/Icon/IconInstagram";
import IconFacebook from "@/components/Icon/IconFacebook";
import IconTwitter from "@/components/Icon/IconTwitter";
import Checkbox from "@/components/UIKit/Checkbox";

const checkbox = ref(false);
const email = ref("");

const getFooterLinks = computed(() => {
  return [
    {
      title: "Fashiofy допоможе",
      links: [
        { title: "Як замовити", link: "/how-to-order" },
        { title: "Доставка", link: "/delivery" },
        { title: "Оплата", link: "/payment" },
        { title: "Повернення", link: "/return" },
        { title: "Розмірна сітка", link: "/size-chart" },
      ],
    },
    {
      title: "Про Fashiofy",
      links: [
        { title: "Про нас", link: "/about" },
        { title: "Контакти", link: "/contacts" },
        { title: "Вакансії", link: "/vacancies" },
        { title: "Партнерство", link: "/partnership" },
      ],
    },
    {
      title: "Fashiofy мережі",
      links: [
        {
          title: "+380999999999",
          component: IconPhone,
          link: "tel:+380999999999",
        },
        { title: "info@fashiofy.store", component: IconMail, link: "mailto:" },
        {
          title: "Instagram",
          component: IconInstagram,
          link: "https://www.instagram.com/fashiofy.ua/",
        },
        {
          title: "Facebook",
          component: IconFacebook,
          link: "https://www.facebook.com/fashiofy.ua/",
        },
        {
          title: "Twitter",
          component: IconTwitter,
          link: "https://twitter.com/fashiofy_ua",
        },
      ],
    },
  ];
});
</script>

<style lang="scss" scoped>
.footer {
  background: var(--primary);

  &__bottom {
    max-width: 1158px;
    width: 100%;
    margin: 0 auto;
    color: var(--extra-light);
    font-size: var(--font-xxs);
    display: flex;
    justify-content: space-between;
    padding-bottom: 60px;
  }

  &__content {
    max-width: 1158px;
    width: 100%;
    margin: 0 auto;
    padding: 80px 24px 60px;
    color: var(--extra-light);

    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  &__col {
    &-title {
      font-size: var(--font-xs);
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: -0.2px;
      margin-bottom: 12px;

      &--sm {
        font-size: var(--font-sm);
      }
    }

    &-text {
      font-size: var(--font-xs);
      font-style: normal;
      font-weight: 300;
      line-height: 18px;
      letter-spacing: -0.1px;
      margin-bottom: 10px;
    }

    &-input {
      display: block;
      width: calc(100% - 30px);
      height: 48px;
      padding: 0 15px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.2);
      border: 0;
      outline: none;
      font-size: var(--font-xs);
      color: var(--extra-light);
      margin-bottom: 10px;

      &::placeholder {
        color: var(--extra-light);
      }
    }

    &-button {
      border-radius: 6px;
      color: var(--primary);
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      background: var(--semi-dark);
      display: block;
      width: 100%;
      height: 48px;
      transition: var(--transition);

      &:not(:disabled):hover {
        background: var(--extra-light);
      }

      &:disabled {
        cursor: default;
        opacity: 0.7;
      }
    }

    &-item {
      margin-bottom: 10px;
      font-size: var(--font-xxs);
      font-style: normal;
      font-weight: 500;
      line-height: 140%;

      a {
        display: flex;
        align-items: center;

        svg {
          margin-right: 10px;
        }
      }
    }

    &-checkbox {
      margin-top: 10px;

      &--text {
        font-size: var(--font-xxs);
      }
    }
  }
}
</style>
