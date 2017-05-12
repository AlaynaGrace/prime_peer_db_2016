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
    return $http({
      url: '/assignments',
      method: 'POST',
      data: objectToSend
    }).then(function success(response){

      console.log(response);

    });
  };

  this.getAssignmentsById = function(id){
    console.log('id:', id);
    console.log('getting!');

    return $http({
      method: 'GET',
      url: '/assignments/findId/' + id,
    }).then(function success(response){
      console.log(response.data);
      return response.data;
    }, function failure(response){
      console.log(response);
    });

  };

  this.deleteAssignment = function(id){
    return $http({
      url:'/assignments/' + id,
      method: 'DELETE',
    }).then(function success(response){
      console.log(response);
    }, function failure(response){
      console.log(response);
    });
  };



});
