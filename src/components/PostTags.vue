<template>
  <div class="relative text-sm flex space-x-2 z-50">
    <g-link
      class="bg-gray-200 rounded px-4 py-1 hover:opacity-80"
      v-for="tag in post.tags"
      :key="tag.id"
      :to="tag.path"
    >
      <span class="text-gray-900"> # {{ tag.title }} </span>
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>
