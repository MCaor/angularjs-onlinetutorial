'use strict';

angular
  .module('yeomanProjApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/examplesList', {
        templateUrl: 'views/exampleslist.html',
        controller: 'ExampleslistCtrl'
      })
      .when('/exampleDetail/:exampleId', {
        templateUrl: 'views/exampledetail.html',
        controller: 'ExampledetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
