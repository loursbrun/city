/**
 * Created by fabienbrun on 29/09/15.
 */
//
//
// ViewCityguidesController
//
// @author Fabien Brun
//

app.controller("ViewBookController", ['$scope', '$log', 'DeviceDetector', function ViewBookController($scope, $log, device)
{

    $log.log("View Book Controller");

    device.setLayout(DeviceDetector.LAYOUT_FILL);




}]);
