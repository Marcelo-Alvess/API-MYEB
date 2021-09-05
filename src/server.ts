import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import path from 'path';

import './database';
import { router } from './routes';

const app = express();

app.use('/tmp/uploads', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server is Running on port:3333"));