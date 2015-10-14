//
//
// ViewHomeController
//
// @author Didier Brun
//

app.controller("ViewHomeController", ['$scope', '$window', '$log', 'DeviceDetector','AnimationModel', function ViewHomeController($scope, $window, $log, device, model) {


    $scope.currentCity = "default";

    $log.log("View Home Controller");

    device.setLayout(DeviceDetector.LAYOUT_FILL);


    $scope.currentCity = "home";


    // Wordings Localised
    $scope.skip_wording = model.localized.labels_dictionaries.common.skip ;



    // Show BackBttn
    $scope.backBtn = angular.element(document.querySelector("#back-btn"));
    TweenMax.to($scope.backBtn, 0, {opacity: 1, scaleX: 1, force3D: true});




}]);



