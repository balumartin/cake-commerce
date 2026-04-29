import categoryRepository from "../repositories/categoryRepository.js";
import productRepository from "../repositories/productRepository.js";

const productService = {
  create: async (data) => {
    if (data.categoryId) {
      const category = await categoryRepository.findById(data.categoryId);

      if (!category) {
        const error = new Error("Category not found");
        error.status = 400;
        throw error;
      }
    }
    return productRepository.create({
      name: data.name,
      description: data.description,
      price: data.price,
      imageUrl: data.imageUrl,

      category: data.categoryId
        ? { connect: { id: data.categoryId } }
        : undefined,
    });
  },

  getAll: async ({
    page = 1,
    limit = 10,
    search,
    minPrice,
    maxPrice,
    category,
  }) => {
    const pageNumber = Math.max(1, parseInt(page) || 1);
    const limitNumber = Math.min(50, Math.max(1, parseInt(limit) || 10));

    const skip = (pageNumber - 1) * limitNumber;

    const where = {};

    if (search) {
      where.name = {
        contains: search,
        mode: "insensitive",
      };
    }

    if (minPrice || maxPrice) {
      where.price = {
        ...(minPrice && { gte: Number(minPrice) }),
        ...(maxPrice && { lte: Number(maxPrice) }),
      };
    }

    if (category && category.trim() !== "") {
      where.category = {
        slug: category,
      };
    }

    const total = await productRepository.count(where);
    const totalPages = Math.ceil(total / limitNumber);

    if (pageNumber > totalPages && totalPages > 0) {
      const error = new Error("Page out of range");
      error.status = 400;
      throw error;
    }

    const products = await productRepository.findAll({
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

  update: async (id, data) => {
    const existing = await productRepository.findById(id);

    if (!existing) {
      const error = new Error("Product not found");
      error.status = 404;
      throw error;
    }
    if (data.categoryId) {
      const category = await categoryRepository.findById(data.categoryId);
      if (!category) {
        const error = new Error("Category not found");
        error.status = 400;
        throw error;
      }
    }
    return productRepository.update(id, {
      name: data.name,
      description: data.description,
      price: data.price,
      imageUrl: data.imageUrl,
      category: data.categoryId
        ? { connect: { id: data.categoryId } }
        : undefined,
    });
  },

  delete: async (id) => {
    const existing = await productRepository.findById(id);

    if (!existing) {
      const error = new Error("Product not found");
      error.status = 404;
      throw error;
    }

    return productRepository.remove(id);
  },
};

export default productService;
