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
  getProducts: async () => {
    return productRepository.getAllProducts();
  },
};

export default productService;
