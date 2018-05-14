//Require Mongoose
var mongoose = require('mongoose');

//need to get the id of the Link to connect

//Define a schema
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    palettes: [
      {type: Schema.Types.ObjectId, ref: 'Palette'}
    ] 
   
});


// Compile model from schema
module.exports = mongoose.model('Project', ProjectSchema);