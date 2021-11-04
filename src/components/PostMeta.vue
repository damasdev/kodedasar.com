<template>
  <div class="text-sm opacity-80">
    Ditulis Oleh {{ post.author }}
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
