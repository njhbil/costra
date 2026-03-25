import express from "express";
import { verifyToken } from "../middleware/authMiddleware";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "./controllerProduct";

const router = express.Router();

router.post("/products", verifyToken, createProduct);
router.get("/products", verifyToken, getProducts);
router.get("/products/:id", verifyToken, getProductById);
router.put("/products/:id", verifyToken, updateProduct);
router.delete("/products/:id", verifyToken, deleteProduct);

export { router };
