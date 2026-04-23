import * as yup from "yup";

export const createProductSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name is too long")
    .required("Name is required"),

  description: yup
    .string()
    .max(200, "Description too long")
    .nullable(),

  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Price is required"),

  imageUrl: yup
    .string()
    .url("Invalid URL format")
    .nullable(),
});

export const updateProductSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name is too long"),

  description: yup
    .string()
    .max(500, "Description too long")
    .nullable(),

  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be positive"),

  imageUrl: yup
    .string()
    .url("Invalid URL format")
    .nullable(),
});