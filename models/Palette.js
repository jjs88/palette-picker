//Require Mongoose
var mongoose = require('mongoose');

//need to get the id of the Link to connect

//Define a schema
var Schema = mongoose.Schema;

var PaletteSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    palettes: [ {type: String} ] 
   
});


// Compile model from schema
module.exports = mongoose.model('Palette', PaletteSchema);