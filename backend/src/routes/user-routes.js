import { Router } from "express";
import { authMiddleware } from "../middlewares/auth-middleware.js";
import { requireRole } from "../middlewares/role-middleware.js";

const router = Router();

router.get("/me", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route works",
    user: req.user,
  });
});

router.get("/admin", authMiddleware, requireRole("ADMIN"), (req, res) => {
  res.json({
    message: "Admin route works",
  });
});

export default router;
