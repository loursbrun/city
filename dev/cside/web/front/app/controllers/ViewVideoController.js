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



    // Hide BackBttn
    $scope.backBtn =  angular.element(document.querySelector("#back-btn"));
    TweenMax.to($scope.backBtn,0,{opacity:0,scaleX:0,  force3D:true});





}]);