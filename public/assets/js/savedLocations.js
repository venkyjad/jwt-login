app.controller('savedSearchesController', function($scope, $http, $window){
	 if (!localStorage.getItem('token')){
    $window.open('/','_self');
  }

	$scope.getPlaces = function(){
  	$scope.loader_flag = true;
    id = localStorage.getItem('user_id')
  	url = 'locations/'+id;
    $http({
      method: "get",
      url: url,
      dataType: 'json',
      headers: { "Content-Type": "application/json; charset=utf-8"},

      })
      .then(function (res) {
        	$scope.loader_flag = false;
        	$scope.places = res.data;     
      })
      .catch(function(res){
        $scope.loader_flag = false;
        swal({
              title: "Alert!",
              text: res.data.message,
              icon: "success",
              showCancelButton: false
            },
            function(isConfirm){
              $window.open('/','_self');
            });
    });

  	

  }
  $scope.getPlaces();

  
});