import express from "express";
import {
    createCompany
} from './controllerCompany'
import { verifyToken } from "../middleware/authMiddleware";

const router = express.Router();

router.post('/createCompany', verifyToken, createCompany);


export { router } ;