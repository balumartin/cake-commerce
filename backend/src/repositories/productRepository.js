import prisma from "../config/prisma.js";

const productRepository = {
  create: (data) => {
    return prisma.product.create({ data });
  },

  findAll: ({ skip, take, where }) => {
    return prisma.product.findMany({
      skip,
      take,
      where,
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  count: (where) => {
    return prisma.product.count({ where });
  },

  findById: (id) => {
    return prisma.product.findUnique({
      where: { id },
    });
  },

  update: (id, data) => {
    return prisma.product.update({
      where: { id },
      data,
    });
  },

  delete: (id) => {
    return prisma.product.delete({
      where: { id },
    });
  },
};

export default productRepository;
