'use strict';

var angular = require('angular');
var app     = angular.module('boilerplate', ['ui.router']);

require('./controllers/index')(app);

app.config([
  '$locationProvider',
  '$urlRouterProvider',
  '$logProvider',
  '$stateProvider',
  function($locationProvider, $urlRouterProvider, $logProvider, $stateProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $logProvider.debugEnabled(true);  // For debug

    $stateProvider
    .state('index', {
      url:         '/',
      templateUrl: '/partials/index.html',
      controller:  'indexCtrl'
    });
  }
]);

app.controller('rootCtrl', [
  '$rootScope',
  '$log',
  function($rootScope, $log) {
    $rootScope.$on('$stateChangeSuccess', function(e, toState, toParams) {
      $log.debug('State changed : ', toState);
      $log.debug('State params : ',  toParams);
    });

    $rootScope.$on('FinishedAllProcesses', function() {
      $log.debug('called!');
    });

    // Application initialization
    var init = function() {

    };

    init();
  }
]);
