import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on ${process.env.NODE_ENV || 'development'} on port ${process.env.PORT || 5000}`);
});