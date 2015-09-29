/**
 * Created by fabienbrun on 29/09/15.
 */
//
//
// ViewBoxsetController
//
// @author Fabien Brun
//

app.controller("ViewBoxsetController", ['$scope', '$log', 'DeviceDetector','$state', function ViewBoxsetController($scope, $log, device, $state)
{

    $log.log("View Boxset Controller");



    device.setLayout(DeviceDetector.LAYOUT_FILL);




}]);
