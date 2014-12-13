'use strict';

var async = require('async');

module.exports = function(app) {
  app.controller('indexCtrl', [
    '$scope',
    function($scope) {

      $scope.$on('$stateChangeSuccess', function(e, toState, toParams) {

      });
    }
  ]);
};
