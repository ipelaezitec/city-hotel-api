import passengerModel from '../models/Passenger';
// import {validationResult} from 'express-validator';


//info de todos los pasajeros
exports.passengerList = async (req, res) => {
  try {
    const passengers = await passengerModel.find({});
    res.status(200).json(passengers);
  } catch (error) {
    res.status(400).send({ message: 'error', error });
  }
}

//info de un pasajero especifico
exports.passengerDetail = async (req, res) => {
  //recupero el id pasado por param
  const idPassenger = req.params.id;

  try {
    const passenger = await passengerModel.findById(idPassenger);
    res.status(200).json(passenger);
  } catch(error) {
    res.status(400).send({ message: 'error', error });
  }
}

//crear un pasajero
exports.passengerCreate = async (req, res) => {
  try {

    const Passenger = new passengerModel(req.body);
    const passenger = await Passenger.save();

    res.status(200).send({passenger})
  } catch (error) {
    res.status(400).send({ message: 'error al crear pasajero', error });
  }
}

