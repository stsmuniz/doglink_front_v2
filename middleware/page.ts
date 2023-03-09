const { getPageBySlug } = usePages()

export default defineNuxtRouteMiddleware(async (to, from) => {
  const pageState = useState('page', () => {})
  try {
    const response = await getPageBySlug(to.params.slug);
    pageState.value = response.page;
  } catch (error) {
    console.error(error);
  }
});
