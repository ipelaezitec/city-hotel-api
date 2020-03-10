import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var passengerSchema = new Schema({

  name: { 
    type: String,
    required: false,
    default: ''
  },
  email: { 
    type: String,
    required: false,
    unique: true //
  },
  dni: {
    type: String,
    required: false,
    default: ''
  },
  bornDate : {
    type:String
  },
  phone: [
    { 
      phoneNumber: {
        type: String,
        required: false,
        default: ''
      }
    }
  ],
  created_at: {
    type: Date,
    dafault: Date.now()
  },
  updated_at: {
    type: Date,
    dafault: Date.now()
  },
  delete_at: {
    type: Date
  },
});





const passengerModel = mongoose.model('Passenger', passengerSchema);

module.exports = passengerModel;