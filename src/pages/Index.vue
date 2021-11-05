<template>
  <Layout class="bg-gray-200">
    <Hero />

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <div class="grid grid-cols-2 gap-10">
        <PostCard
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
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

export default {
  components: {
    Hero,
    PostCard,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>
