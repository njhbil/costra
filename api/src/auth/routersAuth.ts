import express from "express";
import {
    createUser,
    loginUser
} from './controllerAuth'

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);

export { router } ;