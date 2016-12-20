var app = angular.module('lista_mercado', ['ui.mask']);

var INTEGER_REGEXP = /^-?\d+$/;
app.directive('integer', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.integer = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (INTEGER_REGEXP.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});

app.controller('ProdutoCtrl', ['$scope', function($scope, $http) {
    $scope.lista_mercado = [];
    
    $scope.addProduto = function(lista_mercado) {
        if($scope.cadastro.$valid) {
            $scope.lista_mercado.push(
                {
                    "nome_produto":     $scope.lista_mercado.nome_produto, 
                    "quantidade_produto": $scope.lista_mercado.quantidade_produto, 
                }
            );
            $scope.resetProduto();
        }
    }

    $scope.deleteProduto = function(index) {
        $scope.lista_mercado.splice(index, 1);
    }

    $scope.resetProduto = function() {
        $scope.lista_mercado.nome_produto       = "";
        $scope.lista_mercado.quantidade_produto   = "";
    }

}])