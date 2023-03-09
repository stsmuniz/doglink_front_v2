<template>
  <a
    class="transition ease-in-out duration-350 bg-white hover:bg-slate-300 border-slate-800 rounded-lg text-center text-2xl border-2 p-2 cursor-pointer whatsapp-button"
    :href="props.href"
    target="_blank"
  >
    <ProfileSocialNetworksSocialIcon icon="whatsapp" />
    {{ props.title }}
  </a>
</template>
<script setup lang="ts">
const page = useState('page')
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
  .whatsapp-button {
    background:  v-bind(`#${page.secondary_color}`);
    color: v-bind(`#${page.primary_color}`);
  }
  .whatsapp-button:hover {
    filter: brightness(125%);
  }
</style>