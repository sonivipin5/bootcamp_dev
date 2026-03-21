import express from 'express';

const app = express();

app.get('/api/v1/bootcamper', (req, res) => {
  res.status(200).json({status:true, message:'Welcome to Bootcamper API'});
});

app.post('/api/v1/bootcamper', (req, res) => {
  res.status(200).json({status:true, message:'Bootcamper created successfully'});
});

app.put('/api/v1/bootcamper/:id', (req, res)=>{
    res.status(200).json({status:true, message:`Bootcamper updated ${req.params.id} successfully`});
});

app.delete('/api/v1/bootcamper/:id', (req, res)=>{
    res.status(200).json({status:true, message:`Bootcamper deleted ${req.params.id} successfully`});
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on ${process.env.NODE_ENV || 'development'} on port ${process.env.PORT || 5000}`);
});