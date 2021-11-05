<template>
  <Layout class="bg-gray-100">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1
        class="my-14 text-4xl font-semibold mx-auto text-center text-gray-700 dark:text-white"
      >
        Kategori: {{ $page.tag.title }}
      </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
        <PostCard
          v-for="edge in $page.tag.belongsTo.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </div>
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
            cover_image (width: 770, height: 380, blur: 10)
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
export default {
  components: {
    PostCard: () => import("~/components/PostCard"),
  },
  metaInfo() {
    return {
      title: this.$page.tag.title,
    };
  },
};
</script>
