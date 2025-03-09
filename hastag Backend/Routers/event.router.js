import express from 'express';
import { createEvent, getEvent } from '../Controllers/event.controller.js';

const router = express.Router();

router.post('/createEvent', createEvent);
router.get('/getEvent', getEvent);

module.exports = router;

