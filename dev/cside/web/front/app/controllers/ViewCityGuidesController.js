/**
 * Created by fabienbrun on 29/09/15.
 */
//
//
// ViewCityguidesController
//
// @author Fabien Brun
//

app.controller("ViewCityguidesController", ['$scope', '$log', 'DeviceDetector', function ViewCityguidesController($scope, $log, device)
{

    $log.log("View Cityguides Controller");

    device.setLayout(DeviceDetector.LAYOUT_FILL);



    // Show BackBttn
    $scope.backBtn =  angular.element(document.querySelector("#back-btn"));
    TweenMax.to($scope.backBtn,0,{opacity:1,scaleX:1, force3D:true});


    // Anim cityguides view
    $scope.viewCityguides =  angular.element(document.querySelector(".view-cityguides"));
    TweenMax.to($scope.viewCityguides,0,{opacity:0, force3D:true});
    TweenMax.to($scope.viewCityguides,0.5,{delay:0.2,  opacity:1, force3D:true});









}]);
