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


    // Show BackBttn
    $scope.videoView = angular.element(document.querySelector(".view-video"));
    //  $scope.cfPlayerContainer =  angular.element(document.querySelector("#fcplayer_container"));
    //  $scope.videoHeight =  $scope.cfPlayerContainer.innerHeight();
    //$scope.windowHeight = $("body").innerHeight();
    //$scope.windowWidth = $("body").innerWidth();






    // Center the video
  /*  $log.log("Hauteur Body :", $scope.windowHeight);
    $log.log("Largeur Body :", $scope.windowWidth);
    var videoHeight = $scope.windowWidth / 2.5;
    $log.log("hauteur Video :", videoHeight);


    var margintopVideo = $scope.windowHeight / 2 - videoHeight / 2 - 100;
    TweenMax.to($scope.videoView, 0, {delay: 0, y: margintopVideo, force3D: true});

*/







}]);



