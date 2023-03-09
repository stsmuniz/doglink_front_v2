<template>
  <Icon
    :name="`cib:${props.icon}`"
    class="transition ease-in-out duration-350 cursor-pointer social-media-icon"
  />
</template>
<script setup lang="ts">
const page = useState('page')
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
  .social-media-icon {
    color: v-bind(`#${page.secondary_color}`);
  }
  .social-media-icon:hover {
    filter: brightness(125%);
  }
</style>
