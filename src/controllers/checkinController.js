import checkinModel from '../models/CheckIn';

// GET {id}
exports.checkinDetail = async (req, res) => {
  try {
    //recupero el id pasado por param
    const checkinID = req.params.id;

    const messages = await checkinModel.findById(checkinID);
    res.status(200).json(messages);
  } catch (error) {
    res.status(400).send({ 
      success: false, 
      error: error 
    });
  }
}

// GET all
exports.checkinList = async (req, res) => {
  
  // let query = checkinModel.find({});
  
//   const user = await userModel.findOne({ _id: userIdFromToken })
//   .populate({ 
//     path: 'messages',
//     model:checkinModel,
//     populate:[ {
//       path: 'sender',
//       model: userModel
//     } ,
//     {
//       path: 'receiver',
//       model: userModel
//     } ]
//  })



  try {
    const checkin = await checkinModel.find({});
    // const messages = await query.exec();;
    res.status(200).json(checkin);
    // res.status(200).json(user.messages);
  } catch (error) {
    res.status(400).send({ 
      success: false,
      error: error
    });
  }
}


// POST 
exports.checkinCreate = async (req, res) => { 
    try {
    
    req.body.updated_at = Date.now();
    req.body.created_at = Date.now();
    
    const CheckIn = new checkinModel(req.body);
    const checkin = await CheckIn.save();
    
    // const user = await userModel.findOne({ _id: userIdFromToken });
    // console.log(user.messages)
    // user.messages.push(message._id);
    checkin.save();
    
    res.status(200).send({checkin})
    
  } catch (error) {
    res.status(400).send({ 
      create: false, 
      error: error 
    });
  }

}
