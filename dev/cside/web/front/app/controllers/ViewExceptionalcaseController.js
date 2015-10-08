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

    // Hide BackBttn
    $scope.backBtn =  angular.element(document.querySelector("#back-btn"));
    TweenMax.to($scope.backBtn,0,{opacity:0,scaleX:0,  force3D:true});




    // Anim exceptionalcase view
    $scope.viewExceptionalcase =  angular.element(document.querySelector(".view-exceptionalcase"));
    TweenMax.to($scope.viewExceptionalcase,0,{opacity:0, force3D:true});
    TweenMax.to($scope.viewExceptionalcase,0.5,{delay:0.2, opacity:1, force3D:true});





}]);
