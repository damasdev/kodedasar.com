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
import { hydrateWhenVisible } from "vue-lazy-hydration";
export default {
  components: {
    Header: hydrateWhenVisible(() => import("~/components/Header")),
    Footer: hydrateWhenVisible(() => import("~/components/Footer")),
    Share: hydrateWhenVisible(() => import("~/components/Share")),
  },
};
</script>
