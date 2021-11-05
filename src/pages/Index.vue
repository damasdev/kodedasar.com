<template>
  <Layout class="bg-gray-200">
    <Hero />

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <PostCard
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </div>

      <Pager
        activeLinkClass="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px mt-8 overflow-hidden"
        linkClass="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
        :info="$page.posts.pageInfo"
      />
    </div>
  </Layout>
</template>

<page-query>
query($page: Int) {
  posts: allPost(perPage: 10, page: $page, filter: { published: { eq: true }}) @paginate{
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        author
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Hero from "~/components/Hero.vue";
import PostCard from "~/components/PostCard.vue";
import { Pager } from "gridsome";

export default {
  components: {
    Hero,
    PostCard,
    Pager,
  },
  metaInfo: {
    title: "Belajar Bahasa Pemrograman untuk Pemula Mulai dari Nol",
    link: [{ rel: "canonical", href: this.$static.metadata.siteUrl }],
    meta: [
      {
        name: "description",
        content:
          "kodedasar.com adalah blog panduan untuk belajar programming. Ada panduan tahap per tahap untuk membuat berbagai aplikasi mulai dari nol.",
      },
    ],
  },
};
</script>
