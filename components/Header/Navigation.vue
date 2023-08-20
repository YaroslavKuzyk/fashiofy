<template>
  <div class="navigation" @mouseleave="activeNav = ''">
    <ul class="navigation__container">
      <li
        class="navigation__item"
        v-for="(item, index) in navList"
        :key="item.title"
        @mouseover="activeNav = item.title.toLowerCase()"
      >
        <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
        <ul
          v-if="activeNav === item.title.toLowerCase()"
          class="navigation__submenu"
          :class="{ right: index > 3 }"
          @mouseleave="activeNav = ''"
        >
          <li
            class="navigation__submenu-item"
            v-for="el in item.submenu"
            :key="el.title"
          >
            <nuxt-link :to="el.link"> {{ el.title }}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const activeNav = ref<string>("");

const navList = computed(() => {
  return [
    {
      title: "Бренди",
      link: "/",
      submenu: [
        {
          title: "Бренд 1",
          link: "/",
        },
        {
          title: "Бренд 2",
          link: "/",
        },
        {
          title: "Бренд 3",
          link: "/",
        },
        {
          title: "Бренд 4",
          link: "/",
        },
        {
          title: "Бренд 5",
          link: "/",
        },
        {
          title: "Бренд 6",
          link: "/",
        },
        {
          title: "Бренд 7",
          link: "/",
        },
        {
          title: "Бренд 8",
          link: "/",
        },
        {
          title: "Бренд 9",
          link: "/",
        },
        {
          title: "Бренд 10",
          link: "/",
        },
        {
          title: "Бренд 11",
          link: "/",
        },
        {
          title: "Бренд 12",
          link: "/",
        },
        {
          title: "Бренд 13",
          link: "/",
        },
        {
          title: "Бренд 14",
          link: "/",
        },
        {
          title: "Бренд 15",
          link: "/",
        },
        {
          title: "Бренд 16",
          link: "/",
        },
        {
          title: "Бренд 17",
          link: "/",
        },
        {
          title: "Бренд 18",
          link: "/",
        },
        {
          title: "Бренд 19",
          link: "/",
        },
        {
          title: "Бренд 20",
          link: "/",
        },
      ],
    },
    {
      title: "Одяг",
      link: "/",
      submenu: [
        {
          title: "Одяг 1",
          link: "/",
        },
        {
          title: "Одяг 2",
          link: "/",
        },
        {
          title: "Одяг 3",
          link: "/",
        },
        {
          title: "Одяг 4",
          link: "/",
        },
        {
          title: "Одяг 5",
          link: "/",
        },
        {
          title: "Одяг 6",
          link: "/",
        },
        {
          title: "Одяг 7",
          link: "/",
        },
        {
          title: "Одяг 8",
          link: "/",
        },
        {
          title: "Одяг 9",
          link: "/",
        },
        {
          title: "Одяг 10",
          link: "/",
        },
        {
          title: "Одяг 11",
          link: "/",
        },
        {
          title: "Одяг 12",
          link: "/",
        },
        {
          title: "Одяг 13",
          link: "/",
        },
        {
          title: "Одяг 14",
          link: "/",
        },
        {
          title: "Одяг 15",
          link: "/",
        },
        {
          title: "Одяг 16",
          link: "/",
        },
        {
          title: "Одяг 17",
          link: "/",
        },
        {
          title: "Одяг 18",
          link: "/",
        },
        {
          title: "Одяг 19",
          link: "/",
        },
        {
          title: "Одяг 20",
          link: "/",
        },
      ],
    },
    {
      title: "Взуття",
      link: "/",
      submenu: [
        {
          title: "Взуття 1",
          link: "/",
        },
        {
          title: "Взуття 2",
          link: "/",
        },
        {
          title: "Взуття 3",
          link: "/",
        },
        {
          title: "Взуття 4",
          link: "/",
        },
        {
          title: "Взуття 5",
          link: "/",
        },
        {
          title: "Взуття 6",
          link: "/",
        },
        {
          title: "Взуття 7",
          link: "/",
        },
        {
          title: "Взуття 8",
          link: "/",
        },
        {
          title: "Взуття 9",
          link: "/",
        },
        {
          title: "Взуття 10",
          link: "/",
        },
        {
          title: "Взуття 11",
          link: "/",
        },
        {
          title: "Взуття 12",
          link: "/",
        },
        {
          title: "Взуття 13",
          link: "/",
        },
        {
          title: "Взуття 14",
          link: "/",
        },
        {
          title: "Взуття 15",
          link: "/",
        },
        {
          title: "Взуття 16",
          link: "/",
        },
        {
          title: "Взуття 17",
          link: "/",
        },
        {
          title: "Взуття 18",
          link: "/",
        },
        {
          title: "Взуття 19",
          link: "/",
        },
        {
          title: "Взуття 20",
          link: "/",
        },
      ],
    },
    {
      title: "Сумки",
      link: "/",
      submenu: [
        {
          title: "Сумки 1",
          link: "/",
        },
        {
          title: "Сумки 2",
          link: "/",
        },
        {
          title: "Сумки 3",
          link: "/",
        },
        {
          title: "Сумки 4",
          link: "/",
        },
        {
          title: "Сумки 5",
          link: "/",
        },
        {
          title: "Сумки 6",
          link: "/",
        },
        {
          title: "Сумки 7",
          link: "/",
        },
        {
          title: "Сумки 8",
          link: "/",
        },
        {
          title: "Сумки 9",
          link: "/",
        },
        {
          title: "Сумки 10",
          link: "/",
        },
        {
          title: "Сумки 11",
          link: "/",
        },
        {
          title: "Сумки 12",
          link: "/",
        },
        {
          title: "Сумки 13",
          link: "/",
        },
        {
          title: "Сумки 14",
          link: "/",
        },
        {
          title: "Сумки 15",
          link: "/",
        },
        {
          title: "Сумки 16",
          link: "/",
        },
        {
          title: "Сумки 17",
          link: "/",
        },
        {
          title: "Сумки 18",
          link: "/",
        },
        {
          title: "Сумки 19",
          link: "/",
        },
        {
          title: "Сумки 20",
          link: "/",
        },
      ],
    },
    {
      title: "Аксесуари",
      link: "/",
      submenu: [
        {
          title: "Аксесуари 1",
          link: "/",
        },
        {
          title: "Аксесуари 2",
          link: "/",
        },
        {
          title: "Аксесуари 3",
          link: "/",
        },
        {
          title: "Аксесуари 4",
          link: "/",
        },
        {
          title: "Аксесуари 5",
          link: "/",
        },
        {
          title: "Аксесуари 6",
          link: "/",
        },
        {
          title: "Аксесуари 7",
          link: "/",
        },
        {
          title: "Аксесуари 8",
          link: "/",
        },
        {
          title: "Аксесуари 9",
          link: "/",
        },
        {
          title: "Аксесуари 10",
          link: "/",
        },
        {
          title: "Аксесуари 11",
          link: "/",
        },
        {
          title: "Аксесуари 12",
          link: "/",
        },
        {
          title: "Аксесуари 13",
          link: "/",
        },
        {
          title: "Аксесуари 14",
          link: "/",
        },
        {
          title: "Аксесуари 15",
          link: "/",
        },
        {
          title: "Аксесуари 16",
          link: "/",
        },
        {
          title: "Аксесуари 17",
          link: "/",
        },
        {
          title: "Аксесуари 18",
          link: "/",
        },
        {
          title: "Аксесуари 19",
          link: "/",
        },
        {
          title: "Аксесуари 20",
          link: "/",
        },
      ],
    },
    {
      title: "Прикраси",
      link: "/",
      submenu: [
        {
          title: "Прикраси 1",
          link: "/",
        },
        {
          title: "Прикраси 2",
          link: "/",
        },
        {
          title: "Прикраси 3",
          link: "/",
        },
        {
          title: "Прикраси 4",
          link: "/",
        },
        {
          title: "Прикраси 5",
          link: "/",
        },
        {
          title: "Прикраси 6",
          link: "/",
        },
        {
          title: "Прикраси 7",
          link: "/",
        },
        {
          title: "Прикраси 8",
          link: "/",
        },
        {
          title: "Прикраси 9",
          link: "/",
        },
        {
          title: "Прикраси 10",
          link: "/",
        },
        {
          title: "Прикраси 11",
          link: "/",
        },
        {
          title: "Прикраси 12",
          link: "/",
        },
        {
          title: "Прикраси 13",
          link: "/",
        },
        {
          title: "Прикраси 14",
          link: "/",
        },
        {
          title: "Прикраси 15",
          link: "/",
        },
        {
          title: "Прикраси 16",
          link: "/",
        },
        {
          title: "Прикраси 17",
          link: "/",
        },
        {
          title: "Прикраси 18",
          link: "/",
        },
        {
          title: "Прикраси 19",
          link: "/",
        },
        {
          title: "Прикраси 20",
          link: "/",
        },
      ],
    },
    {
      title: "Косметика",
      link: "/",
      submenu: [
        {
          title: "Косметика 1",
          link: "/",
        },
        {
          title: "Косметика 2",
          link: "/",
        },
        {
          title: "Косметика 3",
          link: "/",
        },
        {
          title: "Косметика 4",
          link: "/",
        },
        {
          title: "Косметика 5",
          link: "/",
        },
        {
          title: "Косметика 6",
          link: "/",
        },
        {
          title: "Косметика 7",
          link: "/",
        },
        {
          title: "Косметика 8",
          link: "/",
        },
        {
          title: "Косметика 9",
          link: "/",
        },
        {
          title: "Косметика 10",
          link: "/",
        },
        {
          title: "Косметика 11",
          link: "/",
        },
        {
          title: "Косметика 12",
          link: "/",
        },
        {
          title: "Косметика 13",
          link: "/",
        },
        {
          title: "Косметика 14",
          link: "/",
        },
        {
          title: "Косметика 15",
          link: "/",
        },
        {
          title: "Косметика 16",
          link: "/",
        },
        {
          title: "Косметика 17",
          link: "/",
        },
        {
          title: "Косметика 18",
          link: "/",
        },
        {
          title: "Косметика 19",
          link: "/",
        },
        {
          title: "Косметика 20",
          link: "/",
        },
      ],
    },
    {
      title: "Білизна",
      link: "/",
      submenu: [
        {
          title: "Білизна 1",
          link: "/",
        },
        {
          title: "Білизна 2",
          link: "/",
        },
        {
          title: "Білизна 3",
          link: "/",
        },
        {
          title: "Білизна 4",
          link: "/",
        },
        {
          title: "Білизна 5",
          link: "/",
        },
        {
          title: "Білизна 6",
          link: "/",
        },
        {
          title: "Білизна 7",
          link: "/",
        },
        {
          title: "Білизна 8",
          link: "/",
        },
        {
          title: "Білизна 9",
          link: "/",
        },
        {
          title: "Білизна 10",
          link: "/",
        },
        {
          title: "Білизна 11",
          link: "/",
        },
        {
          title: "Білизна 12",
          link: "/",
        },
        {
          title: "Білизна 13",
          link: "/",
        },
        {
          title: "Білизна 14",
          link: "/",
        },
        {
          title: "Білизна 15",
          link: "/",
        },
        {
          title: "Білизна 16",
          link: "/",
        },
        {
          title: "Білизна 17",
          link: "/",
        },
        {
          title: "Білизна 18",
          link: "/",
        },
        {
          title: "Білизна 19",
          link: "/",
        },
        {
          title: "Білизна 20",
          link: "/",
        },
      ],
    },
  ];
});
</script>

<style lang="scss" scoped>
.navigation {
  background: var(--primary);

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1158px;
    padding: 0 24px;
    margin: 0 auto;
  }

  &__item {
    padding: 8px 0;
    color: var(--extra-light);
    font-size: var(--font-xxs);
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
  }

  &__submenu {
    width: max-content;
    padding: 8px;
    top: 100%;
    left: -8px;
    position: absolute;
    z-index: 1;
    background: var(--primary);
    display: grid;
    gap: 10px 60px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);

    &-item {
      width: max-content;
    }

    &.right {
      left: auto;
      right: -8px;
    }
  }
}
</style>
