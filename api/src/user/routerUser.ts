import express from "express";
import { getUser } from "./controllerUser";

const app = express.Router();

app.get('/getUser', getUser)

export { app };