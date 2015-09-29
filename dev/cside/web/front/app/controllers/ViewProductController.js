//
//
// ViewProductController
//
// @author Didier Brun
//

app.controller("ViewProductController", ['$scope', '$log', '$state', '$rootScope', 'DeviceDetector', function ViewHomeController($scope, $log, $state, $rootScope, device)
{

    $log.log("View Product Controller");

    device.setLayout(DeviceDetector.LAYOUT_AUTO);

    $rootScope.products = [];
    $rootScope.currentProduct = null;

    for (var i = 0; i < 100; i++) {
        $rootScope.products.push({label:"Product n°" + (i+1), key:"p"+i});
    }

    $rootScope.productWithKey = function(key){
        for (var i = 0; i < $scope.products.length; i++){
            if ($rootScope.products[i].key == key)return $rootScope.products[i];
        }
    }

    $scope.pathTo = function (path, product){
        $state.go(path,{product:product});
    }

}]);

app.animation('.product-detail-view',['$log', '$rootScope', function($log, $rootScope) {

    return {
        enter: function (element, done) {
            TweenLite.set(element, {left:"-50%"});
            TweenLite.to(element,.5,  {left:"0%", force3D:true, onComplete:done});
        },
        leave: function (element, done) {
            TweenLite.to(element,.5,  {left:"-50%",  force3D:true, onComplete:done});
        }
    }
}]);
