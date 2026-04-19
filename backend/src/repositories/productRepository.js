import prisma from "../config/prisma.js";

export const createProduct = (data) => {
  return prisma.product.create({ data });
};

export const getAllProduct = () => {
  return prisma.product.findMany();
};
