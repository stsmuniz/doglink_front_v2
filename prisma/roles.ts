import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function roles() {
  await prisma.roles.deleteMany();
  const free = await prisma.roles.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "Free",
    },
  });
  const personal = await prisma.roles.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: "Personal",
    },
  });
}

export { roles };
