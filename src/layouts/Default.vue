<template>
  <div id="app">
    <Header />

    <main class="mt-16">
      <slot />
    </main>

    <Share />

    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Share from "~/components/Share.vue";

export default {
  components: {
    Header,
    Footer,
    Share,
  },
};
</script>
