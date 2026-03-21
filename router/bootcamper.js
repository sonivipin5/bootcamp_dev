import express from 'express';
import {
    getBootcamper,
    createBootcamper,
    updateBootcamper,
    deleteBootcamper
} from '../controller/bootcamper.js';

const router = express.Router();

router.route('/')
    .get(getBootcamper)
    .post(createBootcamper);

router.route('/:id')
    .get(getBootcamper)
    .put(updateBootcamper)
    .delete(deleteBootcamper);

export default router;