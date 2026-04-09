import { Router } from "express";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = Router();

router.get("/me", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route works",
    user: req.user,
  });
});

export default router;
