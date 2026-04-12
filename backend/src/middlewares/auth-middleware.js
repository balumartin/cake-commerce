import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/base.js";

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      const error = new Error("Authentication token is missing");
      error.status = 403;
      throw error;
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      const error = new Error("Invalid token form");
      error.status = 401;
      throw error;
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded;
    next();
  } catch (err) {
    err.status = 401;
    next(err);
  }
};
