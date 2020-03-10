import express from 'express';
import passengerController from '../controllers/passengerController';

const router = express.Router();


// GET request for one user.
router.get('/:id', passengerController.passengerDetail);

// GET request for all users.
router.get('/', passengerController.passengerList);

// POST request create user
router.post('/', passengerController.passengerCreate);


module.exports = router;