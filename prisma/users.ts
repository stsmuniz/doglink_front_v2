import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function users() {
  await prisma.user.deleteMany()
  const free = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      username: "freeuser",
      email: "stsmuniz@gmail.com",
      password: "$2a$12$1slt0U0kU2GBLbFlMhkisunKJonqGLE7Xr/JzkC5lmrftugZG3W1e",
      name: "Free User",
      roleId: 1,
      pages: {
        create: [
          {
            tagline: "Teste de página de perfil grátis",
            slug: "freeuser",
            primary_color: 'a92424',
            secondary_color: 'e7e7e7',
            background_color: '3a3a3a',
            text_color: 'e7e7e7',
            profile_image: "https://source.unsplash.com/random/200x200/?profile_picture",
            socialNetworks: {
              create: [
                {
                  type: "DevTo",
                  url: "https://dev.to/stsmuniz",
                  order: 1,
                },
                {
                  type: "Github",
                  url: "https://github.com/stsmuniz",
                  order: 2,
                },
              ],
            },
            sections: {
              create: [
                {
                  id: 1,
                  type: "ExternalLink",
                  data: {
                    url: "https://stsmuniz.tech",
                    text: "Meu site",
                  },
                  order: 1,
                },
                {
                  id: 2,
                  type: "HeaderBlock",
                  data: {
                    text: "Saiba Mais",
                  },
                  order: 2,
                },
              ],
            },
          },
        ],
      },
    },
  });
}

export { users };
