<template>
  <Layout>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="my-14 text-4xl font-semibold mx-auto text-center">
        Kategori: {{ $page.tag.title }}
      </h1>

      <PostCard
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            author
            timeToRead
            description
            content
            tags {
              id
              title
              path
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    PostCard,
  },
  metaInfo: {
    title: "Kategori",
  },
};
</script>
