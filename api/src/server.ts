import express, { type Request, type Response } from 'express';
import { router as routerAuth } from './auth/routersAuth';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', routerAuth);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});