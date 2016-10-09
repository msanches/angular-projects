var tab = 1; // define a primeira aba a ser aberta

var app = angular.module('tabs', []);

app.controller('MainCtrl', function($rootScope, $scope, $http) {
    $scope.mes= 'outubro de 2016';

    $http.get("http://dwebkit.com/dwcontrol/app/programacao.php?id_evento=2")
    .then(function(response){
          localStorage.setItem('programacao', JSON.stringify(response.data.records));
          $scope.dados = JSON.parse(localStorage.getItem('programacao'));
      },
          function(response) {
          $rootScope.content = "Erro";
      });

      /* Controle das abas -> a primeira vez a aba é selecionada pela variável global tab */
      if (!$scope.tab){$scope.tab = tab}
      $scope.clickTab = function (t) {
        tab = t;
        $scope.tab = t;
      }
});
