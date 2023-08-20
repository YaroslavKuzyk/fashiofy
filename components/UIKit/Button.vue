<template>
  <button class="button" :class="{ white: white }">
    <slot />
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  white: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  display: inline-block;
  padding: 8px 20px;
  color: #fff;
  text-align: center;
  font-size: var(--font-xs);
  font-weight: 600;
  line-height: 140%;
  background: var(--secondary);
  border-radius: 6px;
  transition: var(--transition);
  border: 1px solid transparent;

  &:hover {
    background: var(--semi-primary);
  }
}

.button.white {
  color: var(--button-text);
  background: var(--extra-light);
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 1px 0px rgba(0, 0, 0, 0.03), 0px 1px 3px 0px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  border: 1px solid var(--border-light);

  &:hover {
    color: var(--extra-dark);
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05);
  }
}
</style>
