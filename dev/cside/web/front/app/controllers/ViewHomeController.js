//
//
// ViewHomeController
//
// @author Didier Brun
//

app.controller("ViewHomeController", ['$scope', '$window', '$log', 'DeviceDetector', function ViewHomeController($scope, $window, $log, device)
{





    $scope.currentCity = "default";

    $log.log("View Home Controller");

    device.setLayout(DeviceDetector.LAYOUT_FILL);

    // Show BackBttn
    $scope.backBtn =  angular.element(document.querySelector("#back-btn"));
    TweenMax.to($scope.backBtn,0,{opacity:1,scaleX:1, force3D:true});







}]);



