import categoryRepository from "../repositories/categoryRepository.js";

const categoryService = {
  getAll: async () => {
    return categoryRepository.findAll();
  },

  create: async ({ name, slug }) => {
    const existing = await categoryRepository.findBySlug(slug);

    if (existing) {
      const error = new Error("Category already exists");
      error.status = 409;
      throw error;
    }

    return categoryRepository.create({ name, slug });
  },
};

export default categoryService;