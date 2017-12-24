'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlacesSchema  = new Schema({
  address:String,
  location:{
    lat:String,
    lng:String,
    locationId:String
  },
})


module.exports = mongoose.model('Places', PlacesSchema);