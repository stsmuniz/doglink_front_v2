export const userTransformer = (user) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    username: user.username,
    profileImage: user.profileImage,
    pages: user.pages[0],
    role: user.role
  };
};
