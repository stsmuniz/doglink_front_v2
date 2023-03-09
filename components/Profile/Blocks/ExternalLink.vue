<template>
  <a
    :href="props.href"
    target="_blank"
    class="transition ease-in-out duration-350 bg-white hover:bg-slate-300 border-slate-800 rounded-lg text-center text-2xl border-2 p-2 cursor-pointer external-link"
  >
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
  .external-link {
    background:  v-bind(`#${page.primary_color}`);
    border-color:  v-bind(`#${page.secondary_color}`);
    color: v-bind(`#${page.secondary_color}`);
  }
  .external-link:hover {
    filter: brightness(125%);
  }
</style>
