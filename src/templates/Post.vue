<template>
  <Layout>
    <main>
      <div
        class="divide-y divide-gray-200 dark:divide-gray-600 mb-10 dark:text-white"
      >
        <article
          class="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 divide-y divide-gray-200 dark:divide-gray-600"
        >
          <header class="text-center my-14">
            <h1
              class="text-4xl text-gray-800 dark:text-white mb-4 font-semibold"
            >
              {{ $page.post.title }}
            </h1>

            <PostMeta :post="$page.post" class="mb-14" />

            <g-image
              :alt="$page.post.title"
              class="w-full object-cover rounded-lg border-2 border-gray-900 dark:border-white"
              v-if="$page.post.cover_image"
              :src="$page.post.cover_image"
              width="600"
              height="300"
            />
          </header>

          <div
            class="divide-y lg:divide-y-0 divide-gray-200 lg:grid lg:grid-cols-3 lg:gap-x-6 pt-10"
            style="grid-template-rows: auto 1fr;"
          >
            <div
              class="divide-y divide-gray-200 dark:divide-gray-600 lg:pb-0 lg:col-span-2 lg:row-span-2"
            >
              <div
                class="prose font-normal max-w-none pb-8 prose-blue dark:prose-dark text-gray-800 dark:text-white"
                v-html="$page.post.content"
              ></div>
              <div class="pt-8">
                <div class="mb-4">
                  FOOTER
                </div>
              </div>
            </div>
            <footer
              class="text-sm font-medium leading-5 divide-y divide-gray-200 dark:divide-gray-600 lg:col-start-3 lg:row-start-2"
            >
              <div class="pb-8 space-y-8">
                <div>
                  SIDEBAR
                </div>
              </div>
              <div class="sticky top-0 space-y-8 pt-8">
                <div>
                  <h2 class="uppercase">
                    Tags
                  </h2>
                  <div class="mt-2">
                    <PostTags :post="$page.post" />
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </main>
  </Layout>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";

export default {
  components: {
    PostMeta,
    PostTags,
  },
  metaInfo() {
    const pathUrl = `https://kodedasar.com${this.$route.path}`;
    return {
      title: this.$page.post.title,
      link: [{ rel: "canonical", href: pathUrl }],
      meta: [
        { name: "description", content: this.$page.post.description },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:description", content: this.$page.post.description },
        { name: "twitter:site", content: "@damasdev" },
        { name: "twitter:creator", content: "@damasdev" },
        { name: "twitter:image", content: this.ogImageUrl },
        // Facebook
        { property: "og:type", content: "article" },
        { property: "og:title", content: this.$page.post.title },
        { property: "og:description", cotent: this.$page.post.description },
        { property: "og:image", content: this.$page.post.cover_image || "" },
        { property: "og:url", content: pathUrl },
      ],
    };
  },
};
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    author
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style>
.token {
  text-shadow: none;
}
</style>
