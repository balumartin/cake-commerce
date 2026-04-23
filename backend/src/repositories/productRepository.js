import prisma from "../config/prisma.js";

export const createProduct = (data) => {
  return prisma.product.create({ data });
};

export const getAllProducts = ({ skip, take, where }) => {
  return prisma.product.findMany({
    skip,
    take,
    where,
    orderBy: {
      createdAt: "desc",
    },
  });
};
export const countProducts = (where) => {
  return prisma.product.count({
    where,
  });
};
export const updateProduct = (id, data) => {
  return prisma.product.update({
    where: { id },
    data,
  });
};
export const deleteProduct = (id) => {
  return prisma.product.delete({
    where: { id },
  });
};

export const findById = (id) => {
  return prisma.product.findUnique({
    where: { id },
  });
};
