<template>
  <div class="flex justify-center items-center gap-4 text-4xl my-4">
    <a v-for="item in props.items" :key="item.id" :href="item.url" target="_blank">
      <ProfileSocialNetworksSocialIcon :icon="snake_case_string(item.type)" />
    </a>
  </div>
</template>
<script setup>
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
});

const { snake_case_string } = useSnakeCaseString()
</script>
