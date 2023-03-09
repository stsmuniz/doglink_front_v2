export default () => {
  const getUserByUsername = (username) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await $fetch(`/api/user/${username}`, {
          method: "GET",
        });

        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    getUserByUsername,
  };
};
