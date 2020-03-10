import express from 'express';
import checkinController from '../controllers/checkinController';




const router = express.Router();


// GET request for one message.
router.get('/:id', checkinController.checkinDetail);

// GET request for all messages.
router.get('/',  checkinController.checkinList);

// POST request create message
router.post('/', checkinController.checkinCreate); 


module.exports = router;