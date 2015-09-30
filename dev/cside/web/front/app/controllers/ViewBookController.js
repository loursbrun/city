/**
 * Created by fabienbrun on 29/09/15.
 */
//
//
// ViewCityguidesController
//
// @author Fabien Brun
//

app.controller("ViewBookController", ['$scope', '$log', 'DeviceDetector','$state', function ViewBookController($scope, $log, device, $state)
{

    $log.log("View Book Controller");



    $log.log($state.params.city) ;




    device.setLayout(DeviceDetector.LAYOUT_FILL);










/*
    .page #animationContent {
    padding-top: 50px;
}

*/




}]);
