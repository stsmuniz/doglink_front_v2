<template>
  <div :style="`background-color: #${page.background_color}`">
    <div class="flex flex-col h-screen justify-between">
      <ProfileHeaderMenu />
      <div class="w-9/12 md:w-1/2 mx-auto grow">
        <slot />
      </div>
      <footer
        class="sticky bottom-0 bg-slate-800 text-white text-center py-4 w-full mt-4 content-between"
      >
        <p>Made with love by Doglink</p>
      </footer>
    </div>
  </div>
</template>
<script setup>
const page = useState('page')
</script>