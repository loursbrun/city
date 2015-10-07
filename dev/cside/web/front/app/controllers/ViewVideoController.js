/**
 * Created by fabienbrun on 07/10/15.
 */
//
//
// ViewHomeController
//
// @author Didier Brun
//

app.controller("ViewVideoController", ['$scope', '$window', '$log', 'DeviceDetector','$state', function ViewVideoController($scope, $window, $log, device, $state)
{


    $scope.currentCity = $state.params.city;
    $log.log($scope.currentCity);







    $log.log("View Video Controller");

    device.setLayout(DeviceDetector.LAYOUT_FILL);

    $scope.showBtn = function($scope, element, attrs){


    };





}]);