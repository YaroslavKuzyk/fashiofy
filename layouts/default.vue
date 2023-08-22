<template>
  <main>
    <Header />
    <slot />
    <Footer />
  </main>
</template>

<script lang="ts" setup>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
</script>
