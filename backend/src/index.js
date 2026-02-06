import dotenv from 'dotenv';

dotenv.config();


import express from 'express';
import cors from 'cors';

import summarizeRoute from './routes/summarize.js';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/summarize', summarizeRoute);

app.listen(process.env.PORT, () => {
  console.log(`Backend running on port ${process.env.PORT}`);
});