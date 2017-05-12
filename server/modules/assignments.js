var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var assignmentSchema = mongoose.Schema({
  assignment_name: String,
  student_name: String,
  score: Number,
  date_completed: Date
});

var assignment = mongoose.model('assignments', assignmentSchema);

router.get('/',function(req,res){
  assignment.find({},function(err,data){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    else{
      console.log('data:', data);
      res.send(data);
    }
  });

});

router.post('/', function(req,res){
  var newAssignment = assignment(req.body);
  newAssignment.save(function(err){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    else{
      res.sendStatus(201);
    }
  });

});

module.exports = router;
