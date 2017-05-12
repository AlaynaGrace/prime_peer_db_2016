myApp.service('AssignmentTracker', function($http){



  this.getAssignments = function(){
    console.log('getting!');
    return $http({
      method: 'GET',
      url: '/assignments'
    }).then(function success(response){
      console.log(response.data);
      return response.data;
    }, function failure(response){
      console.log(response);
    });

  };

  this.addAssignment = function(objectToSend){
    console.log('adding!');
    $http({
      url: '/assignments',
      method: 'POST',
      data: objectToSend
    }).then(function success(response){
      console.log(response);
    });
  };



});
