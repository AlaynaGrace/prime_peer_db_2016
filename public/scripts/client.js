// console.log('js');
var myApp = angular.module('myApp',[]);

myApp.controller('AssignmentController', function($http, AssignmentTracker){
  console.log('controller');

  var vm = this;
  vm.test = 'Hello';
  vm.assignments = [];

  vm.getAssignments = function(){
    AssignmentTracker.getAssignments().then(function(data){
      vm.assignments = data;
    });
  };

  vm.createAssignment = function(){
    var objectToSend = {
      assignment_name: vm.assignmentNameIn,
      student_name: vm.studentNameIn,
      score: vm.scoreIn,
      date_completed: vm.dateCompletedIn
    };
    AssignmentTracker.addAssignment(objectToSend);
    vm.getAssignments();


    console.log('vm.assignments:',vm.assignments);
  };

  AssignmentTracker.getAssignmentsById('59160ab213faddb8318d1abe').then(function(data){
    console.log('testing other get:',data);
  });

  vm.deleteAssignment = function(id) {
    console.log('delete id:', id);
    AssignmentTracker.deleteAssignment(id);
    vm.getAssignments();
  };


});
