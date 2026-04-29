import prisma from "../config/prisma.js";

const categoryRepository = {
  findAll: async () => {
    return prisma.category.findMany({
      orderBy: { name: "asc" },
    });
  },

  findById: async (id) => {
    return prisma.category.findUnique({
      where: { id },
    });
  },

  findBySlug: async (slug) => {
    return prisma.category.findUnique({
      where: { slug },
    });
  },

  create: async (data) => {
    return prisma.category.create({ data });
  },
};

export default categoryRepository;
