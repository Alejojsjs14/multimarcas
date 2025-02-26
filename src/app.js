import { NODE_ENV } from '#utils/env.config.js';
import cors from 'cors';
import express from 'express';

const app = express();

if (NODE_ENV === 'development') {
  app.use(cors());
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



export default app;
