<template>
  <div class="text-sm opacity-80 text-gray-600 dark:text-gray-200">
    By {{ post.author }}
    |
    <template v-if="post.timeToRead">
      <strong>{{ post.timeToRead }} min read.</strong>
    </template>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>
