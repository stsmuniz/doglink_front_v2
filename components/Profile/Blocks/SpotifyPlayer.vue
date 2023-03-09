<template>
  <div class="spotify-embed-container">
    <iframe
      style="border-radius: 12px"
      :src="`https://open.spotify.com/embed/track/${url}?utm_source=generator&theme=0`"
      width="100%"
      height="80"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
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
