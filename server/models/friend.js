
console.log('friends model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var FriendSchema = new mongoose.Schema({
  phone_ID : String,
  name : String,
  time_left : Number,
  max_combo : Number,
  score : Number, 
});
var Friend = mongoose.model( 'Friend' , FriendSchema );
