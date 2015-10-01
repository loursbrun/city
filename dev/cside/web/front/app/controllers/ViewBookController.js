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



    // Rescale img Full size

    //var imgSlide1Height =  angular.element(document.querySelector(".slide1"));
    //TweenMax.to(imgSlide1Height,0.5,{delay:0,opacity:"1",force3D:true});





}]);







