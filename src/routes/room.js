import express from 'express';
import roomController from '../controllers/roomController';

const router = express.Router();

// GET /{id}
router.get('/:id', roomController.roomDetail);

// GET /
router.get('/', roomController.roomList);

// POST
router.post('/' , roomController.roomCreate); 

// PUT
router.put('/:id' , roomController.roomUpdate); 

//DELETE
router.delete('/:id', roomController.roomDelete);


module.exports = router;