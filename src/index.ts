import dotenv from 'dotenv';
import 'reflect-metadata';
import express from 'express';

import './database/connect';
import routes from './routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => console.log('🔥 Server started'));