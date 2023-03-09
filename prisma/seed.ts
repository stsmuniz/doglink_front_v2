import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { roles } from "./roles";
import { users } from "./users";

async function main() {
  await roles();
  await users();
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
