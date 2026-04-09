import authService from "../services/auth-service.js";

const authController = {
  register: async (req, res, next) => {
    try {
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
      const { email, password } = req.body;
      const result = await authService.login({ email, password });
      res.json(result);
    } catch (err) {
      next(err);
    }
  },
};

export default authController;
