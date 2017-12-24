'use strict';

var mongoose = require('mongoose'),
  Places = mongoose.model('Places');



exports.list_all_locations = function(req, res) {
  Places.find({}, function(err, list) {
    if (err)
      res.send(err);
    res.json(list);
  });
};


exports.save_location = function(req, res) {
  var new_task = new Places({
    address: req.body.address,
    location:{
      lat: req.body.lat,
      lng: req.body.lng,
      locationId: req.body.id
    }

  });
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

