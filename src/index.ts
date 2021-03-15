import dotenv from 'dotenv';
import 'reflect-metadata';
import cors from 'cors';
import express from 'express';

import './database/connect';
import routes from './routes';

dotenv.config();

const corsOptions = {
  origin: '*',
}

const app = express();

app.use(cors(corsOptions))

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => console.log('🔥 Server started'));