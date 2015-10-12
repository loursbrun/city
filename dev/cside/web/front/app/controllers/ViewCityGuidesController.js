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



    // Wordings Localised &  Books objects parse json
    $scope.books_objects = model.localized.labels_dictionaries ;
    $scope.books_array = [];
    $scope.number_of_book = 0;
    $scope.colors_array = [];
    $scope.link_img_array = [];

    var i = 0;

    for (var prop in $scope.books_objects) {
        $scope.books_array.push($scope.books_objects[prop]);
        console.log(prop);
        i ++ ;
        $scope.number_of_book = i ;
    }

    // Color parse
    for(var y = 0 ; y < i - 2 ; y++)
    {
        $scope.colors_array[y] = model.global.books[y].color ;
        console.log( $scope.colors_array[y]);
    }

    // Link IMG parse
    for(var z = 0 ; z < i - 2 ; z++)
    {
        $scope.link_img_array[z] = "../deploy/deploy/assets/images/cities/"+ $scope.books_array[z + 2].slug +"/cover.png" ;
        console.log( $scope.link_img_array[z]);
    }






    var book = 0 ;

    $scope.books_array= $scope.books_array.slice(2,i - 2);
    $log.log("Title:" , $scope.books_array);
    $log.log("Slug:" , $scope.books_array[book].slug);
    $log.log("Color:" , $scope.colors_array[book]);





}]);
