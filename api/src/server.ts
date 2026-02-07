import express from 'express';
import { router as routerAuth } from './auth/routersAuth';
import { router as routerCompany } from './company/routerCompany';
import { router as routerUser } from './user/routerUser'

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', routerAuth);
app.use('/', routerCompany);
app.use('/', routerUser);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});