<template>
  <div id="app" class="bg-white dark:bg-gray-900">
    <LazyHydrate when-visible>
      <Header />
    </LazyHydrate>

    <main class="relative">
      <slot />
    </main>

    <LazyHydrate when-visible>
      <Share />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Footer />
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration";
export default {
  components: {
    LazyHydrate,
    Header: () => import("~/components/Header.vue"),
    Footer: () => import("~/components/Footer.vue"),
    Share: () => import("~/components/Share.vue"),
  },
};
</script>
