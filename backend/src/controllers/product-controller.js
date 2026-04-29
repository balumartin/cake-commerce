import {
  createProductSchema,
  updateProductSchema,
} from "../schemas/product-schema.js";
import productService from "../services/product-service.js";

const productController = {
  createProduct: async (req, res, next) => {
    try {
      await createProductSchema.validate(req.body);
      const { name, description, price, imageUrl, categoryId } = req.body;
      const product = await productService.create({
        name,
        description,
        price,
        imageUrl,
        categoryId
      });

      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  },
  getProducts: async (req, res, next) => {
    try {
      const { page, limit, search, minPrice, maxPrice, category } = req.query;
      const result = await productService.getAll({
        page,
        limit,
        search,
        minPrice,
        maxPrice,
        category
      });
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  },
  updateProduct: async (req, res, next) => {
    try {
      await updateProductSchema.validate(req.body);
      const { name, description, price, imageUrl, categoryId } = req.body;
      const product = await productService.update(req.params.id, {
        name,
        description,
        price,
        imageUrl,
        categoryId
      });

      res.json(product);
    } catch (err) {
      next(err);
    }
  },

  deleteProduct: async (req, res, next) => {
    try {
      await productService.delete(req.params.id);

      res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};

export default productController;
