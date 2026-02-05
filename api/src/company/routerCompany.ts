import express from "express";
import {
    createCompany,
    deleteCompany,
    getCompany
} from './controllerCompany'
import { verifyToken } from "../middleware/authMiddleware";

const router = express.Router();

router.get('/getCompany',verifyToken, getCompany);
router.post('/createCompany', verifyToken, createCompany);
router.delete('/deleteCompany/:id', verifyToken, deleteCompany);

export { router } ;