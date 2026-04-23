import { loginSchema, registerSchema } from "../schemas/auth-schema.js";
import authService from "../services/auth-service.js";

const authController = {
  register: async (req, res, next) => {
    try {
      await registerSchema.validate(req.body);
      const { email, password } = req.body;
      const user = await authService.register({ email, password });

      res.status(201).json({
        id: user.id,
        email: user.email,
      });
    } catch (err) {
      next(err);
    }
  },
  login: async (req, res, next) => {
    try {
      await loginSchema.validate(req.body);
      const { email, password } = req.body;
      const result = await authService.login({ email, password });
      res.json(result);
    } catch (err) {
      next(err);
    }
  },
};

export default authController;
