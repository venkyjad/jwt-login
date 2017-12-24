app.controller('searchController', function($scope, $http, $window){

  if (!localStorage.getItem('token')){
    $window.open('/','_self');
  }
  $scope.master = {};
  $scope.place = {};
  $scope.$on('gmPlacesAutocomplete::placeChanged', function(){
      var res = $scope.autocomplete.getPlace();
      $scope.place.address = res.formatted_address;
      
      $scope.place.lat = res.geometry.location.lat();
      $scope.place.lng = res.geometry.location.lng();
      $scope.place.id =  res.place_id;
      
      $scope.$apply();
  });

  $scope.savePlace = function(place){
  	$scope.loader_flag = true;
  	url = 'locations'
    $http({
      method: "POST",
      url: url,
      data:place,
      dataType: 'json',
      headers: { "Content-Type": "application/json; charset=utf-8" },

      })
      .then(function (res) {
      
        	$scope.place = angular.copy($scope.master);
        	$scope.autocomplete = " ";
        	$scope.loader_flag = false;

      
      })
      .catch(function(res){
        $scope.loader_flag = false;
        swal({
              title: "Alert!",
              text: res.data.message,
              icon: "success"
            }
            ,function(isConfirm){
              $window.open('/','_self');
            });
    });

  	

  }
  

  
  


});