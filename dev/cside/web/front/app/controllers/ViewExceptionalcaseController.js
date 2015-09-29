/**
 * Created by fabienbrun on 29/09/15.
 */
//
//
// ViewExceptionalcaseController
//
// @author Fabien Brun
//

app.controller("ViewExceptionalcaseController", ['$scope', '$log', 'DeviceDetector', function ViewExceptionalcaseController($scope, $log, device)
{

    $log.log("View Excetionalcase Controller");

    device.setLayout(DeviceDetector.LAYOUT_FILL);





}]);
