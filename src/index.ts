import express from 'express';
import dotenv from 'dotenv';
import { routes } from "./routes";

dotenv.config();
const app = express();
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`server runing port ${process.env.PORT}`);
})
