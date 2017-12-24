var app = angular.module ("myApp", ['ngRoute','gm']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "googleSearch.html",
        controller : 'searchController'
    })
    .when("/savedLocations", {
        templateUrl : 'savedSearches.html',
        controller : 'savedSearchesController'
    });
});

app.run(function($http) {

  $http.defaults.headers.common.Authorization = 'JWT '+localStorage.getItem('token') ;

});

app.controller('authController', function($scope, $http, $window){
    $scope.logout = function(){
    localStorage.removeItem('token');
    $window.open('/','_self');
  }

});