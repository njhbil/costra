import express from "express";
import cors from "cors";
import { router as routerAuth } from "./auth/routersAuth";
import { router as routerCompany } from "./company/routerCompany";
import { router as routerUser } from "./user/routerUser";
import { router as routerProduct } from "./product/routerProduct";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/", routerAuth);
app.use("/", routerCompany);
app.use("/", routerUser);
app.use("/", routerProduct);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
