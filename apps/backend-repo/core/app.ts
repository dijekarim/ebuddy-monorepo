import express from 'express';
import userRouter from '../routes/userRoutes';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.BE_PORT || 5000;
app.use(cors());

app.use(bodyParser.json());
app.use(userRouter)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});