//
//
// ViewHomeController
//
// @author Didier Brun
//

app.controller("ViewHomeController", ['$scope', '$log', 'DeviceDetector', function ViewHomeController($scope, $log, device)
{

    $log.log("View Home Controller");

    device.setLayout(DeviceDetector.LAYOUT_FILL);


}]);
