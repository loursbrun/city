/**
 * Created by fabienbrun on 29/09/15.
 */
//
//
// ViewExceptionalcaseController
//
// @author Fabien Brun
//

app.controller("ViewExceptionalcaseController", ['$scope', '$log', 'DeviceDetector','AnimationModel', function ViewExceptionalcaseController($scope, $log, device, model)
{

    $log.log("View Excetionalcase Controller");

    device.setLayout(DeviceDetector.LAYOUT_FILL);

    // Sku
    $scope.book_sku = model.localized.labels_dictionaries["exceptional-case"].sku ;


    // Hide BackBttn
    $scope.backBtn =  angular.element(document.querySelector("#back-btn"));
    TweenMax.to($scope.backBtn,0,{opacity:0,scaleX:0,  force3D:true});



    // Anim exceptionalcase view
    $scope.viewExceptionalcase =  angular.element(document.querySelector(".view-exceptionalcase"));
    TweenMax.to($scope.viewExceptionalcase,0,{opacity:0, force3D:true});
    TweenMax.to($scope.viewExceptionalcase,0.5,{delay:0.2, opacity:1, force3D:true});



    // Wordings Localised
    $scope.exceptional_case_description = model.localized.labels_dictionaries['exceptional-case'].description ;
    $scope.exceptional_case_title = model.localized.labels_dictionaries['exceptional-case'].title ;
    $scope.more_wording = model.localized.labels_dictionaries.common.more ;
    $scope.back_wording = model.localized.labels_dictionaries.common.back ;
    $scope.box_set_wording = model.localized.labels_dictionaries.common.box_set ;



}]);
