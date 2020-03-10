import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const checkinSchema = new Schema({

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
  room: { 
    type: Schema.Types.ObjectId, 
    ref: 'room', 
  },

  passenger: { 
    type: Schema.Types.ObjectId, 
    ref: 'passenger', 
  },

});


const messageModel = mongoose.model('Checkin', checkinSchema);

module.exports = messageModel;