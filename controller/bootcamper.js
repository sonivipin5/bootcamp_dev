
export const getBootcamper = (req, res, next) => {
  res.status(200).json({status:true, message:'Welcome to Bootcamper API'});
}

export const createBootcamper = (req, res, next) => {
  res.status(200).json({status:true, message:'Bootcamper created successfully'});
}

export const updateBootcamper = (req, res, next) => {
  res.status(200).json({status:true, message:`Bootcamper updated ${req.params.id} successfully`});
}

export const deleteBootcamper = (req, res, next) => {
  res.status(200).json({status:true, message:`Bootcamper deleted ${req.params.id} successfully`});
}