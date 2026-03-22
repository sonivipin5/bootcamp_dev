import express from 'express';
import bootcamperRouter from './router/bootcamper.js';
import { logger } from './middleware/logger.js';
import morgan from 'morgan';

import dotenv from 'dotenv';

dotenv.config();

const app = express();

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('combined'))
}

app.use('/api/v1/bootcamper', bootcamperRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.NODE_ENV || 'development'} on port ${process.env.PORT || 5000}`);
});