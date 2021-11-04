<template>
  <Layout>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div class="text-center my-16">
        <h1 class="text-3xl">
          {{ $page.post.title }}
        </h1>

        <PostMeta :post="$page.post" />
      </div>

      <div class="bg-white p-6 rounded-md overflow-hidden">
        <div class="-ml-6 -mr-6 -mt-6 mb-6">
          <g-image
            :alt="$page.post.title"
            class="w-full object-cover"
            v-if="$page.post.cover_image"
            :src="$page.post.cover_image"
          />
        </div>

        <div class="prose prose-blue" v-html="$page.post.content" />

        <div class="mt-8">
          <PostTags :post="$page.post" />
        </div>
      </div>
    </div>
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
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.description,
        },
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
