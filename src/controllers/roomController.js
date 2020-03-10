import roomModel from '../models/Room';


// GET /{id}
exports.roomDetail = async (req, res) => {
  try {
    //recupero el id pasado por param
    const roomId = req.params.id;

    const room = await roomModel.findById(roomId);
    res.status(200).json(room);
  } catch (error) {
    res.status(400).send({ 
      success: false, 
      error: error 
    });
  }
}

// GET 
exports.roomList = async (req, res) => {

  try {
    let query = roomModel.find({});

    let floor = req.query.floor;
    if (req.query.floor != undefined){
      query.find({ "floor": { "$regex": floor, "$options": "i" } })
    }

    let type = req.query.type;
    if (req.query.type != undefined){
      query.find({"type": type})
    }

    const rooms = await query.exec();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(400).send({ 
      success: false,
      error: error
    });
  }
}

// POST
exports.roomCreate = async (req, res) => { 

  try {
    req.body.updated_at = Date.now();
    req.body.created_at = Date.now();

    const Room = new roomModel(req.body);
    const room = await Room.save();

    res.status(200).send({room})
  } catch (error) {
    res.status(400).send({ 
      create: false, 
      error: error 
    });
  }

}

//PUT
exports.roomUpdate = async (req, res) => {
  console.log('llega aca?')
  try {
    console.log(req.params.id)
    const room = await roomModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: Object.assign(req.body) },
      { new: true },
    )

    console.log(room)
    res.status(200).json(room);
  }
  catch(error) {
    res.status(400).send({ message: 'error', error });
  }
  
}


// DELETE
exports.roomDelete = async (req, res) => { 
  try {
    //recupero el id pasado por param
    const roomID = req.params.id;

    const room = await roomModel.findOneAndRemove({ _id: roomID });

    if (room == null) 
      return res.status(200).send({
        delete: false,
        error: 'this room does not exist.'
      });


    let response = {
      delete:true,
      room : 'This room has been successfully deleted',
      value : {id : roomID }
    }
    return res.status(200).json(response);

  } catch (error) {
    res.status(400).send({ 
      delete: false, 
      error: error 
    });
  }
}
