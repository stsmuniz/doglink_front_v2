<template>
<div class="text-center">
    <img
      :src="page.profile_image"
      class="profile-picture rounded-full border-4 w-24 h-24 mx-auto mb-4"
    />
    <h3 class="page-slug text-center text-2xl font-bold">{{ page.slug }}</h3>
    <p class="tagline text-center text-xl">{{ page.tagline }}</p>
</div>
</template>
<script setup>
const page = useState('page')
</script>
<style scoped>
  .page-slug {
    color: v-bind(`#${page.text_color}`);
  }
  .profile-picture {
    color: v-bind(`#${page.primary_color}`);
  }
  .tagline {
    color: v-bind(`#${page.text_color}`);
  }
</style>