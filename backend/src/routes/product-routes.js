import { Router } from "express";
import { authMiddleware } from "../middlewares/auth-middleware.js";
import { requireRole } from "../middlewares/role-middleware.js";
import productController from "../controllers/product-controller.js";

const router = Router();

router.get("/", productController.getProducts);

router.post(
  "/",
  authMiddleware,
  requireRole("ADMIN"),
  productController.create,
);

export default router;
