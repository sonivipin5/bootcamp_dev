import express from 'express';
import bootcamperRouter from './router/bootcamper.js';
const app = express();

app.use('/api/v1/bootcamper', bootcamperRouter)

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on ${process.env.NODE_ENV || 'development'} on port ${process.env.PORT || 5000}`);
});