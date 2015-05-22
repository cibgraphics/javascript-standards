(function(){
  var module = angular.module('presentationApp', ['ui.router','ui.bootstrap']);

  module.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state({
        name: 'home',
        url: '/home',
        controller: 'homeController',
        templateUrl: 'templates/home.html'
      })
      .state({
        name: 'angular',
        url: '/angular',
        controller: 'angularController',
        templateUrl: 'components/angular/views/layout.html',
        abstract: 'true'
      })
      .state({
        name: 'angular.architecture',
        url: '/architecture',
        controller: 'angularArchitectureController',
        templateUrl: 'components/angular/views/architecture.html'
      });
  }]);

  module.controller('homeController',['$scope', function($scope) {

  }]);

  module.controller('angularController', ['$scope', function($scope) {
    $scope.subHeading = null

    $scope.setSubHeading = function(heading) {
      $scope.subHeading = heading;
    }
  }]);

  module.controller('angularArchitectureController', ['$scope', function($scope){
    $scope.setSubHeading('Modular Architecture');
  }]);

  })();