//
//
// ViewHomeController
//
// @author Didier Brun
//

app.controller("ViewHomeController", ['$scope', '$window', '$log', 'DeviceDetector', function ViewHomeController($scope, $window, $log, device)
{







    $log.log("View Home Controller");

    device.setLayout(DeviceDetector.LAYOUT_FILL);

    $scope.showBtn = function($scope, element, attrs){


    };







}]);



