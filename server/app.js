var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var mongo = require('./modules/mongoConnect.js');
var assignments = require('./modules/assignments.js');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/assignments', assignments);

app.listen(4221, function(){
  console.log('server up on 4221');
});

app.get('/', function(req,res){
  res.sendFile(path.resolve('public/views/index.html'));
});
