import express from 'express';
import { StudentRouter } from './routes/routes';

const app = express();
app.use(express.json());
app.use('/api/students', StudentRouter);

export { app };
