var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope, $http) {
  $scope.name = 'Clientes';

  $http.get("clientes.js").then(function(response) {
    $scope.clientes = response.data;
    $scope.num = $scope.clientes.length - 1;
  });

  $scope.cli_index = 0;

  $scope.next = function() {
    if ($scope.cli_index >= $scope.clientes.length - 1) {
      $scope.cli_index = 0;
    } else {$scope.cli_index++;}
  };
  
  $scope.prev = function() {$scope.cli_index--; };

});