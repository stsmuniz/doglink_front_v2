<template>
    <div
    v-if="show"
    class="overlay w-screen top-0 left-0 z-10 h-screen fixed bg-slate-400"
  ></div>
</template>
<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
</script>