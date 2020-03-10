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