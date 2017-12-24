var app = angular.module ("loginApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login.html",
        controller : 'loginController'
    })
    .when("/register", {
        templateUrl : 'register.html',
        controller : 'signupController'
    });
});

app.controller('loginController', function($scope, $http, $window){

    $scope.login = function(user){
    url = 'auth/login'
    $http({
      method: "POST",
      url: url,
      data:user,
      dataType: 'json',
      headers: { "Content-Type": "application/json; charset=utf-8" },

      }).then(function (res) {
        if (res.data.status == 'failed'){
            swal({
              title: "Alert!",
              text: res.data.message,
              icon: "success"
            });
        }
        else {
            // $location.path('/home');
           localStorage.setItem('token',res.data.token);
           localStorage.setItem('user_id',res.data.user_id);
            $window.open('/home', "_self");
        }     
    }).catch(function(res){
        swal({
              title: "Alert!",
              text: res.data.message,
              icon: "success"
            });
    });
    }
	
  
});

app.controller('signupController', function($scope, $http, $window){

    $scope.register = function(user){
    url = 'auth/register'
    $http({
      method: "POST",
      url: url,
      data:user,
      dataType: 'json',
      headers: { "Content-Type": "application/json; charset=utf-8" },

      }).then(function (res) {
        if (res.data.fullName){
            swal({
              title: "Registration Sucesfull!",
              text: "Please Login to continue",
              icon: "success",
              showCancelButton: false,
              confirmButtonText: 'ok'

            }, function(isConfirm){
                $window.open('/', "_self");
            });
        }
        
    });
    }
    
  
});

    
  
