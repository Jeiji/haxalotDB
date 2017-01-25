var app = angular.module('app' , ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
  .when( '/' , {
    templateUrl : 'partials/new.html',
    controller : 'newCtrl'
  })
  .when( '/edit' , {
    templateUrl : 'partials/new.html',
    controller : 'editCtrl'
  })
  .otherwise({
    redirectTo : '/'
  });
});
