export const requireRole = (role) => {
  return (req, res, next) => {
    if (!req.user) {
      const error = new Error("Unauthorized");
      error.status = 401;
      return next(error);
    }
    if (req.user.role !== role) {
      const error = new Error("Forbidden");
      error.status = 403;
      return next(error);
    }
    next();
  };
};
