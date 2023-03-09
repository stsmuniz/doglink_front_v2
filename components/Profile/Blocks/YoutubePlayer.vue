<template>
  <div class="flex flex-col">
    <iframe
      :src="props.url"
      class="aspect-video"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});
</script>
