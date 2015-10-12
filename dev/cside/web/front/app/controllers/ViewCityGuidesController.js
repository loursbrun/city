/**
 * Created by fabienbrun on 29/09/15.
 */
//
//
// ViewCityguidesController
//
// @author Fabien Brun
//

app.controller("ViewCityguidesController", ['$scope', '$log', 'DeviceDetector','AnimationModel', function ViewCityguidesController($scope, $log, device, model)
{

    $log.log("View Cityguides Controller");

    device.setLayout(DeviceDetector.LAYOUT_FILL);



    // Wordings Localised
    $scope.home_wording = model.localized.labels_dictionaries.home.title ;
    $scope.home_description_wording = model.localized.labels_dictionaries.home.description ;
    $scope.pdf_btn_wording = model.localized.labels_dictionaries.common.pdf ;
    $scope.exceptional_case_btn_wording = model.localized.labels_dictionaries.common.exceptional_case ;
    $scope.box_set_btn_wording = model.localized.labels_dictionaries.common.box_set ;


    // Show BackBttn
    $scope.backBtn =  angular.element(document.querySelector("#back-btn"));
    TweenMax.to($scope.backBtn,0,{opacity:1,scaleX:1, force3D:true});


    // Anim cityguides view
    $scope.viewCityguides =  angular.element(document.querySelector(".view-cityguides"));
    TweenMax.to($scope.viewCityguides,0,{opacity:0, force3D:true});
    TweenMax.to($scope.viewCityguides,0.5,{delay:0.2,  opacity:1, force3D:true});



    // Change BG color to Black from CSS app

    var app =  angular.element(document.querySelector("#app"));
    TweenMax.to(app,0,{backgroundColor:"#ffffff", force3D:true});







}]);
