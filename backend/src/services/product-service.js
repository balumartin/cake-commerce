import * as productRepository from "../repositories/productRepository.js";

const productService = {
  createProduct: async ({ name, description, price, imageUrl }) => {
    return productRepository.createProduct({
      name,
      description,
      price,
      imageUrl,
    });
  },
  getProducts: async ({ page = 1, limit = 10, search, minPrice, maxPrice }) => {
    const pageNumber = Math.max(1, parseInt(page) || 1);
    const limitNumber = Math.min(50, Math.max(1, parseInt(limit) || 10));

    const skip = (pageNumber - 1) * limitNumber;

    const where = {
      AND: [
        search
          ? {
              name: {
                contains: search,
                mode: "insensitive",
              },
            }
          : undefined,

        minPrice || maxPrice
          ? {
              price: {
                ...(minPrice && { gte: Number(minPrice) }),
                ...(maxPrice && { lte: Number(maxPrice) }),
              },
            }
          : undefined,
      ].filter(Boolean),
    };

    const total = await productRepository.countProducts(where);

    const totalPages = Math.ceil(total / limitNumber);

    if (pageNumber > totalPages && totalPages > 0) {
      const error = new Error("Page out of range");
      error.status = 400;
      throw error;
    }

    const products = await productRepository.getAllProducts({
      skip,
      take: limitNumber,
      where,
    });

    return {
      data: products,
      meta: {
        total,
        page: pageNumber,
        limit: limitNumber,
        totalPages,
      },
    };
  },

  updateProduct: async (id, { name, description, price, imageUrl }) => {
    const existing = await productRepository.findById(id);

    if (!existing) {
      const error = new Error("Product not found");
      error.status = 404;
      throw error;
    }

    const updateData = {};

    if (name !== undefined) updateData.name = name;
    if (description !== undefined) updateData.description = description;
    if (price !== undefined) updateData.price = price;
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl;

    return productRepository.updateProduct(id, updateData);
  },

  deleteProduct: async (id) => {
    const existing = await productRepository.findById(id);

    if (!existing) {
      const error = new Error("Product not found");
      error.status = 404;
      throw error;
    }

    return productRepository.deleteProduct(id);
  },
};

export default productService;
