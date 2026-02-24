import express from "express";
import {
    createCompany,
    deleteCompany,
    getCompany
} from './controllerCompany'
import { verifyToken } from "../middleware/authMiddleware";

const router = express.Router();

router.get('/company',verifyToken, getCompany);
router.post('/company', verifyToken, createCompany);
router.delete('/company/:id', verifyToken, deleteCompany);

export { router } ;