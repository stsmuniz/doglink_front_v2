import { prisma } from ".";

export const createPage = (pageData) => {
  return prisma.pages.create({
    data: pageData,
  });
};

export const getPages = (params = {}) => {
  return prisma.pages.findMany({
    where: {
        params,
    },
  });
};

export const getPageById = (pageId) => {
  return prisma.pages.findUnique({
    where: {
      id: pageId,
    },
  });
};

export const getPageBySlug = (pageSlug, include) => {
  return prisma.pages.findUnique({
    where: {
      slug: pageSlug,
    },
    include: include
  });
};

export const getPageByUsername = (username) => {
  return prisma.pages.findUnique({
    where: {
      id: username,
    },
  });
};
