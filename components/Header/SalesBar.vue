<template>
  <div v-if="sales && configStore.getConfig.sales.active" class="sales-bar">
    Знижки до -{{ configStore.getConfig.sales.percent }} цієї неділі!
    <IconClose class="sales-bar__close" @click="changeSales" />
  </div>
</template>

<script lang="ts" setup>
import { useConfigStore } from "@/stores/useConfigStore";
import IconClose from "@/components/Icon/IconClose";

const configStore = useConfigStore();

const sales = ref(false);

const changeSales = () => {
  sales.value = false;
  localStorage.setItem("sales", `${sales.value}`);
};

onMounted(async () => {
  await configStore.fetchConfig();
  if (localStorage.getItem("sales") === null) {
    sales.value = true;
    localStorage.setItem("sales", `${sales.value}`);
  } else {
    sales.value = JSON.parse(localStorage.getItem("sales"));
  }
});
</script>

<style lang="scss" scoped>
.sales-bar {
  position: relative;
  text-align: center;
  background: var(--extra-dark);
  color: var(--extra-light);
  font-style: normal;
  font-size: var(--font-xxs);
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.1px;
  padding: 6px;

  &__close {
    position: absolute;
    top: 50%;
    right: 6px;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    cursor: pointer;
  }
}
</style>
