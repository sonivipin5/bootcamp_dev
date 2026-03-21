import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({status:true, message:'Welcome to Bootcamper API'});
});

router.post('/', (req, res) => {
  res.status(200).json({status:true, message:'Bootcamper created successfully'});
});

router.put('/:id', (req, res)=>{
    res.status(200).json({status:true, message:`Bootcamper updated ${req.params.id} successfully`});
});

router.delete('/:id', (req, res)=>{
    res.status(200).json({status:true, message:`Bootcamper deleted ${req.params.id} successfully`});
});

export default router;