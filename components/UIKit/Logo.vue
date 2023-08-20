<template>
  <div class="logo">
    <LogoIcon />
    <span v-if="text" class="logo__text">FASHIOFY</span>
  </div>
</template>

<script lang="ts" setup>
import LogoIcon from "@/components/Icon/LogoIcon";

const props = defineProps({
  text: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.logo {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__text {
    margin-top: 6px;
    color: var(--primary);
    font-family: AbhayaLibre;
    font-size: 23px;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
