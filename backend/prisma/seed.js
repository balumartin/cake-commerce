// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   await prisma.category.createMany({
//     data: [
//       { name: "Torták", slug: "tortak" },
//       { name: "Esküvői torták", slug: "eskuvoi-tortak" },
//       { name: "Sütemények", slug: "sutemenyek" },
//       { name: "Egyedi torták", slug: "egyedi-tortak" },
//     ],
//     skipDuplicates: true,
//   });
// }

// main()
//   .then(() => prisma.$disconnect())
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });