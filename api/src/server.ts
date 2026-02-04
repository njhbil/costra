import express from 'express';
import { router as routerAuth } from './auth/routersAuth';
import { router as routerCompany } from './company/routerCompany';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', routerAuth);
app.use('/', routerCompany);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});