import productService from "../services/product-service.js";

const productController = {
  create: async (req, res, next) => {
    try {
      const { name, description, price, imageUrl } = req.body;
      const product = await productService.createProduct({
        name,
        description,
        price,
        imageUrl,
      });

      res.status(201).json(product);
    } catch (err) {
      next(err);
    }
  },
  getProducts: async (req, res, next) => {
    try {
      const products = await productService.getProducts();
      res.status(201).json(products);
    } catch (err) {
      next(err);
    }
  },
};

export default productController;
