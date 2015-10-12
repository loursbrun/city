/**
 * Created by fabienbrun on 29/09/15.
 */
//
//
// ViewBoxsetController
//
// @author Fabien Brun
//

app.controller("ViewBoxsetController", ['$scope', '$log', 'DeviceDetector','$state','AnimationModel', function ViewBoxsetController($scope, $log, device, $state, model)
{

    $log.log("View Boxset Controller");



    device.setLayout(DeviceDetector.LAYOUT_FILL);


    // Hide BackBttn
    $scope.backBtn =  angular.element(document.querySelector("#back-btn"));
    TweenMax.to($scope.backBtn,0,{opacity:0,scaleX:0,  force3D:true});


    // Anim boxset view
    $scope.viewBoxset =  angular.element(document.querySelector(".view-boxset"));
    TweenMax.to($scope.viewBoxset,0,{opacity:0, force3D:true});
    TweenMax.to($scope.viewBoxset,0.5,{delay:0.2, opacity:1, force3D:true});


    // Wordings Localised
    $scope.box_set_description = model.localized.labels_dictionaries['box-set'].description ;
    $scope.box_set_title = model.localized.labels_dictionaries['box-set'].title ;
    $scope.back_wording = model.localized.labels_dictionaries.common.back ;
    $scope.exceptional_case_wording = model.localized.labels_dictionaries.common.exceptional_case ;




}]);
