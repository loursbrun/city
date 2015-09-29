//
//
// ProductDetailController
//
// @author Didier Brun
//

app.controller("ProductDetailController", ['$scope', '$log', '$state', '$rootScope', 'DeviceDetector', function ViewHomeController($scope, $log, $state, $rootScope, device)
{

    $log.log("Product Detail Controller");


    $scope.$on("$stateChangeSuccess", function (event, toState, toParams){
       if (toState.name == "product.detail.zoom"){
           $rootScope.currentProduct = $scope.productWithKey(toParams.product);
       }
    });

    $scope.close = function(){
        $state.go('^.^');
        $log.log("Parent");
    }

}]);


