angular.module('spa',['spa.login',
    'spa.httpRequest',
    'ui.router',
    'ngRoute',
    'ui.bootstrap',
    'ngLodash',
    'ngTouch'
])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    //sets default state when the app is booted
    $urlRouterProvider
      .when('login', '/login')
      .otherwise('/');

    $locationProvider.html5Mode(true);
    //the form state that allows users to create their request
    $stateProvider
      //functionality states
      .state('login', {
        url: '/login',
        templateUrl: 'app/auth/login.html',
        controller: 'LoginController'
      });

  });