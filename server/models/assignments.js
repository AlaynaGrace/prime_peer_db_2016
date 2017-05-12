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
  console.log('req.body is:', req.body);
  assignment.find(req.body,function(err,data){
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


router.get('/findId/:id',function(req,res){
  console.log('req.params.id is:', req.params.id);
  var parameters = {};
  if(req.params.id !== undefined){
    parameters = {_id:req.params.id};
  }
  assignment.find(parameters,function(err,data){
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

router.delete('/:id', function(req,res){
  // console.log(req.body);
  var idToDelete = {
    _id: req.params.id
  };
  assignment.remove(idToDelete,function(err){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    else{
      res.sendStatus(200);
    }
  });
});

module.exports = router;
