<template>
  <div
    class="bg-white dark:bg-gray-100 rounded-lg overflow-hidden p-6 relative"
  >
    <div class="-ml-6 -mr-6 -mt-6 mb-6">
      <g-image
        :alt="post.title"
        v-if="post.cover_image"
        class="w-full object-cover"
        width="600"
        height="300"
        :src="post.cover_image"
      />
    </div>
    <div>
      <h2
        class="mb-2 text-2xl font-semibold mt-0 font-sans"
        v-html="post.title"
      />

      <PostMeta
        class="text-xs text-gray-600 mb-4 dark:text-gray-900"
        :post="post"
      />

      <p class="text-sm" v-html="post.description" />

      <PostTags class="mt-4" :post="post" />

      <g-link
        class="absolute top-0 left-0 right-0 bottom-0 opacity-0"
        :to="post.path"
      >
        {{ post.title }}
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    PostMeta: () => import("~/components/PostMeta"),
    PostTags: () => import("~/components/PostTags"),
  },
  props: ["post"],
};
</script>
