<template>
  <p
    class="text-center text-2xl font-bold p-2 header-block"
  >
    {{ props.text }}
  </p>
</template>
<script setup lang="ts">
const page = useState('page')
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
  .header-block {
    color: v-bind(`#${page.text_color}`);
  }
  .header-block:hover {
    filter: brightness(125%);
  }
</style>