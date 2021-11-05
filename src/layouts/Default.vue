<template>
  <div id="app" class="bg-white dark:bg-gray-900">
    <Header />

    <main class="relative">
      <slot />
    </main>

    <Share />

    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import("~/components/Header.vue"),
    Footer: () => import("~/components/Footer.vue"),
    Share: () => import("~/components/Share.vue"),
  },
};
</script>
