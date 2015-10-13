/**
 * Created by fabienbrun on 29/09/15.
 */
//
//
// ViewCityguidesController
//
// @author Fabien Brun
//

app.controller("ViewBookController", ['$scope', '$log', 'DeviceDetector','AnimationModel', '$state',function ViewBookController($scope ,$log, device, model ,$state)
{

    $log.log("View Book Controller");


    // Change BG color to Black from CSS app
    var app =  angular.element(document.querySelector("#app"));
    TweenMax.to(app,0,{backgroundColor:"#FFFFFF", force3D:true});


    // Anim book view
    $scope.viewBook =  angular.element(document.querySelector(".view-book"));
    TweenMax.to($scope.viewBook,0,{opacity:0, force3D:true});
    TweenMax.to($scope.viewBook,0.5,{delay:0.2, opacity:1, force3D:true});

    //$log.log($state.params.city) ;
    $scope.book_page = $state.params.city;


    // Wordings Localised
    $scope.more_wording = model.localized.labels_dictionaries.common.more ;
    $scope.back_wording = model.localized.labels_dictionaries.common.back ;
    $scope.exceptional_case_wording = model.localized.labels_dictionaries.common.exceptional_case ;
    $scope.box_set_wording = model.localized.labels_dictionaries.common.box_set ;


    // Hide BackBttn
    $scope.backBtn =  angular.element(document.querySelector("#back-btn"));
    TweenMax.to($scope.backBtn,0,{opacity:0.5,scaleX:0,  force3D:true});
    device.setLayout(DeviceDetector.LAYOUT_FILL);


    // Size of screen
    $scope.windowWidth = $("body").innerWidth();
    $scope.windowHeight = $("body").innerHeight();



    // Number of books
    $scope.books_object = model.global.books;
    $scope.books_number = model.global.books.length;
    //$log.log("Number of books :" +  $scope.books_number) ;


    for(var i = 0 ; i < $scope.books_number; i ++ ) {
       // $log.log("Books Names :" +  $scope.books_object[i].id) ;
        if( $scope.books_object[i].id == $state.params.city) {

            $scope.book_name = $scope.books_object[i].id ;
            $scope.book_color = $scope.books_object[i].color ;
            $scope.book_inversed_layout = $scope.books_object[i].inversed_layout ;
            $scope.book_video_link = $scope.books_object[i].video_link ;
            $scope.book_badge = $scope.books_object[i].badge ;
            $scope.book_img_number = $scope.books_object[i].imgs.length ;
            $scope.book_imgs_1 = $scope.books_object[i].imgs[0] ;
            $scope.book_imgs_2 = $scope.books_object[i].imgs[1] ;
            $scope.book_imgs_3 = $scope.books_object[i].imgs[2] ;
            $scope.book_imgs_4 = $scope.books_object[i].imgs[3] ;
            $scope.book_imgs_5 = $scope.books_object[i].imgs[4] ;
            $scope.book_imgs_6 = $scope.books_object[i].imgs[5] ;
            $scope.book_imgs_7 = $scope.books_object[i].imgs[6] ;
            $scope.book_imgs_8 = $scope.books_object[i].imgs[7] ;
            $scope.book_description = model.localized.labels_dictionaries[$scope.book_page].description ;
            $scope.book_sku = model.localized.labels_dictionaries[$scope.book_page].sku ;
            //$log.log("Localised:" +  $scope.book_description) ;



            $scope.link_img_array = [];
            $scope.link_img_array_temp = [];



            $scope.link_img_array_temp.push($scope.book_imgs_1) ;
            $scope.link_img_array_temp.push($scope.book_imgs_2) ;
            $scope.link_img_array_temp.push($scope.book_imgs_3) ;
            $scope.link_img_array_temp.push($scope.book_imgs_4) ;
            $scope.link_img_array_temp.push($scope.book_imgs_5) ;
            $scope.link_img_array_temp.push($scope.book_imgs_6) ;
            $scope.link_img_array_temp.push($scope.book_imgs_7) ;
            $scope.link_img_array_temp.push($scope.book_imgs_8) ;




            $log.log("Array Link Img Slideshow:" +   $scope.link_img_array_temp) ;


            for (var iter = 0; iter < $scope.link_img_array_temp.length; iter++) {
                if($scope.link_img_array_temp[iter] == undefined) {
                    $log.log("Undefined !!!!!!!!!!!");
                    $scope.link_img_array_temp.pop();
                }
                //$scope.link_img_array[iter] = "../deploy/deploy/assets/images/" + $scope.link_img_array[iter]
                else {
                $scope.link_img_array.push("../deploy/deploy/assets/images/" + $scope.link_img_array_temp[iter]);
                }
            }
            $scope.link_img_array_temp.pop();
            $log.log("Array Link Img Temp:" +   $scope.link_img_array_temp) ;
            $log.log("Array Link Img Slideshow:" +   $scope.link_img_array.length) ;



        }

    }


    // Function to convert Hexa color to RGBA fot tint of slideshow
    function convertHex(hex,opacity){
        hex = hex.replace('#','');
        r = parseInt(hex.substring(0,2), 16);
        g = parseInt(hex.substring(2,4), 16);
        b = parseInt(hex.substring(4,6), 16);

        result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
        $scope.book_color_tint = result;
        return result;
    }
    convertHex($scope.book_color,30);

/*
    $log.log("Windows Width :" + $scope.windowWidth);
    $log.log("book_name :" +  $scope.book_name) ;
    $log.log("book_color :" +  $scope.book_color) ;
    $log.log("book_color_tint :" + $scope.book_color_tint);
    $log.log("book_inversed_layout :" +  $scope.book_inversed_layout) ;
    $log.log("book_video_link :" +  $scope.book_video_link) ;
    $log.log("book_badge :" +  $scope.book_badge) ;
    $log.log("book_img_number :" +  $scope.book_img_number) ;
    $log.log("book_imgs_1 :" +  $scope.book_imgs_1) ;
    $log.log("book_imgs_2 :" +  $scope.book_imgs_2) ;
    $log.log("book_imgs_3 :" +  $scope.book_imgs_3) ;
    $log.log("book_imgs_4 :" +  $scope.book_imgs_4) ;
    $log.log("book_imgs_5 :" +  $scope.book_imgs_5) ;
    $log.log("book_imgs_6 :" +  $scope.book_imgs_6) ;
    $log.log("book_imgs_7 :" +  $scope.book_imgs_7) ;
    $log.log("book_description :" +  $scope.book_description) ;
    $log.log("book_sku :" +  $scope.book_sku) ;
*/


// Split Slider up & Content bootom if screen width < 768

    if($scope.windowWidth < 768){
        $scope.slideshow = angular.element(document.querySelector(".slideshow"));
        //TweenMax.to($scope.slideshow,1,{delay:0,x:"-50%",force3D:true});
    }


  // Slider animation
    $scope.timer_slideshow_speed = 6;
    $scope.timer_slideshow_animation = 2;

    $scope.tint =  angular.element(document.querySelector(".tint"));
    $scope.slide1 =  angular.element(document.querySelector("#slide1"));
    $scope.slide2 =  angular.element(document.querySelector("#slide2"));
    $scope.slide3 =  angular.element(document.querySelector("#slide3"));
    $scope.slide4 =  angular.element(document.querySelector("#slide4"));
    $scope.slide5 =  angular.element(document.querySelector("#slide5"));
    $scope.slide6 =  angular.element(document.querySelector("#slide6"));
    $scope.slide7 =  angular.element(document.querySelector("#slide7"));
    $scope.slide8 =  angular.element(document.querySelector("#slide8"));

    var i = 1;
    setInterval(function() {
        i = i + 1;
        if (i > ($scope.book_img_number )) {i = 1}
       // $log.log("#slide"+ [i]) ;

        TweenMax.to($scope.slide1,$scope.timer_slideshow_animation,{opacity:0, force3D:true});
        TweenMax.to($scope.slide2,$scope.timer_slideshow_animation,{opacity:0, force3D:true});
        TweenMax.to($scope.slide3,$scope.timer_slideshow_animation,{opacity:0, force3D:true});
        TweenMax.to($scope.slide4,$scope.timer_slideshow_animation,{opacity:0, force3D:true});
        TweenMax.to($scope.slide5,$scope.timer_slideshow_animation,{opacity:0, force3D:true});
        TweenMax.to($scope.slide6,$scope.timer_slideshow_animation,{opacity:0, force3D:true});
        TweenMax.to($scope.slide7,$scope.timer_slideshow_animation,{opacity:0, force3D:true});
        TweenMax.to($scope.slide8,$scope.timer_slideshow_animation,{opacity:0, force3D:true});
        TweenMax.to($scope.tint,$scope.timer_slideshow_animation/2,{opacity:0.5, force3D:true});
        TweenMax.to($scope.tint,$scope.timer_slideshow_animation/2,{delay:$scope.timer_slideshow_animation/2, opacity:0, force3D:true});


        slideNext =  angular.element(document.querySelector("#slide"+ [i]));
        TweenMax.to(slideNext,$scope.timer_slideshow_animation,{opacity:1, force3D:true});


    }, $scope.timer_slideshow_speed * 1000);


// Book inversed layout


        $log.log("Inversed:" + $scope.book_inversed_layout );



    $scope.bookContainer = angular.element(document.querySelector(".book-container"));
    $scope.slideshow = angular.element(document.querySelector(".slideshow"));

    if ($scope.book_inversed_layout == true & device.mobile() == null  ) {
            //inversed true
        TweenMax.to($scope.bookContainer, 0, {css: {left:"50%"}});
        TweenMax.to($scope.slideshow, 0, {css: {left:"0%"}});
        } else {
        //inversed False

        }
// Scroll auto to top
    $scope.scrollTop();

}]);







