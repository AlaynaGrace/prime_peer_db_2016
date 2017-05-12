// console.log('js');
var myApp = angular.module('myApp',[]);

myApp.controller('AssignmentController', function($http, AssignmentTracker){
  console.log('controller');

  var vm = this;
  vm.test = 'Hello';
  vm.assignments = [];

  vm.getAssignments = AssignmentTracker.getAssignments;

  vm.createAssignment = function(){
    var objectToSend = {
      assignment_name: vm.assignmentNameIn,
      student_name: vm.studentNameIn,
      score: vm.scoreIn,
      date_completed: vm.dateCompletedIn
    };
    AssignmentTracker.addAssignment(objectToSend);
    vm.assignments = vm.getAssignments();
    console.log('vm.assignments:',vm.assignments);
  };


});
