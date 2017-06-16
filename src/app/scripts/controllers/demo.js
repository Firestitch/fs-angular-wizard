'use strict';


angular.module('app')
  .controller('DemoCtrl', function ($scope) {


    $scope.text = '';

    $scope.select = function(name) {
        $scope.selected = name;
    }
});
