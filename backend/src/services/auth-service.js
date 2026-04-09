import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as userRepository from "../repositories/userRepository.js";

const authService = {
  register: async ({ email, password }) => {
    const existingUser = await userRepository.findByEmail(email);

    if (existingUser) {
      const error = new Error("Email already in use");
      error.status = 400;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return userRepository.createUser({
      email,
      password: hashedPassword,
    });
  },
  login: async ({ email, password }) => {
    const user = await userRepository.findByEmail(email);

    if (!user) {
      const error = new Error("Invalid credentials");
      error.status = 401;
      throw error;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      const error = new Error("Invalid password");
      error.status(401);
      throw error;
    }

    const token = jwt.sign(
      {
        userId: user.id,
        role: user.role,
      },

      process.env.JWT_SECRET,

      { expiresIn: "15m" },
    );

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    };
  },
};

export default authService;
