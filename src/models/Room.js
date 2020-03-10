import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  roomNumber:{
    type:String,
    default:''  
  },
  floor:{
    type:String,
    default:'1'  
  },
  state: { 
    type: String,
    enum: ['free','occupied','maintenance','cleaning',],
    required: false,
  }, 
  type: { 
    type: String,
    enum: ['simple', 'special'],
    required: false,
  }, 
  price: {
    type: Number,
    required: false,
    default: 0
  },
  bedrooms: {
    type: Number,
    required: false, 
    default: 0,
  },
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
  created_by: {
    type: String,
    default: ''
  },

});



const roomModel = mongoose.model('Room', roomSchema);

module.exports = roomModel;