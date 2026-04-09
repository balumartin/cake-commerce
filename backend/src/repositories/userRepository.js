import prisma from "../config/prisma.js";

export const findByEmail = (email) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const createUser = (data) => {
  return prisma.user.create({
    data,
  });
};
