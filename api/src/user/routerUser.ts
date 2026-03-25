import express from "express";
import { getUser } from "./controllerUser";
import { verifyToken } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/user", verifyToken, getUser);

export { router };
