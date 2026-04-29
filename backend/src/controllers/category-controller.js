import categoryService from "../services/category-service.js";

const categoryController = {
  getAllCategories: async (req, res, next) => {
    try {
      const categories = await categoryService.getAll();

      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  },

  createCategory: async (req, res, next) => {
    try {
      const { name, slug } = req.body;

      if (!name || !slug) {
        const error = new Error("Name and slug are required");
        error.status = 400;
        throw error;
      }

      const category = await categoryService.create({ name, slug });

      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  },
};

export default categoryController;
