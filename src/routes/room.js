import express from 'express';
import roomController from '../controllers/roomController';

const router = express.Router();

// GET /{id}
router.get('/:id', roomController.roomDetail);

// GET /
router.get('/', roomController.roomList);

// POST
router.post('/' , roomController.roomCreate); 


module.exports = router;