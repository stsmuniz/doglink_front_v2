<template>
    <div>
        <Transition>
            <Overlay :show="loading" />
        </Transition>
        <div v-if="page">
            <ProfilePageData :page="page" />
            <ProfileSocialNetworks :items="page.socialNetworks"/>
            <div class="blocks flex justify-center gap-4 flex-col">
                <component
                    v-for="section in page.sections"
                    :key="section.id"
                    :is="componentList[section.type].component" 
                    v-bind="section.data"
                />
        </div>
        </div>
    </div>
</template>
<script setup>
const ExternalLink = resolveComponent('ProfileBlocksExternalLink')
const HeaderBlock = resolveComponent('ProfileBlocksHeaderBlock')
const SpotifyPlayer = resolveComponent('ProfileBlocksSpotifyPlayer')
const WhatsappButton = resolveComponent('ProfileBlocksWhatsappButton')
const YoutubePlayer = resolveComponent('ProfileBlocksYoutubePlayer')

const componentList = {
    ExternalLink: {
        component: ExternalLink,
    },
    HeaderBlock: {
        component: HeaderBlock,
    },
    SpotifyPlayer: {
        component: SpotifyPlayer,
    },
    WhatsappButton: {
        component: WhatsappButton,
    },
    YoutubePlayer: {
        component: YoutubePlayer,
    },
}

const loading = ref(true)
const page = ref(null)
const pageState = useState('page')

definePageMeta({
  layout: "profile",
  middleware: 'page',
});

const getData = async () => {
    loading.value = true

    try {
        page.value = pageState.value
    } catch(error) {
        console.error("error")
    } finally {
        loading.value = false
    }
}

onBeforeMount(() => {
    getData()
})
</script>
<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>