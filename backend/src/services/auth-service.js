import bcrypt from "bcrypt";
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
};

export default authService;
