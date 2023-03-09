export default () => {
    const getPageBySlug = (slug) => {
      return new Promise(async (resolve, reject) => {
        try {
          const response = await $fetch(`/api/pages/${slug}`, {
            method: "GET",
          });
  
          resolve(response);
        } catch (error) {
          reject(error);
        }
      });
    };
  
    return {
        getPageBySlug,
    };
  };
  