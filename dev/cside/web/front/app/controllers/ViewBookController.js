/**
 * Created by fabienbrun on 29/09/15.
 */
//
//
// ViewCityguidesController
//
// @author Fabien Brun
//

app.controller("ViewBookController", ['$scope', '$log', 'DeviceDetector','AnimationModel', '$state', function ViewBookController($scope ,$log, device, model ,$state)
{

    $log.log("View Book Controller");



    $log.log($state.params.city) ;
    $scope.book_page = $state.params.city;



    device.setLayout(DeviceDetector.LAYOUT_FILL);




    // Number of books
    $scope.books_object = model.global.books;
    $scope.books_number = model.global.books.length;



    $log.log("Number of books :" +  $scope.books_number) ;


    for(var i = 0 ; i < $scope.books_number; i ++ ) {

       // $log.log("Books Names :" +  $scope.books_object[i].id) ;

        if( $scope.books_object[i].id == $state.params.city) {

            $scope.book_name = $scope.books_object[i].id ;
            $scope.book_color = $scope.books_object[i].color ;
            $scope.book_inversed_layout = $scope.books_object[i].inversed_layout ;
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
            $log.log("Localised:" +  $scope.book_description) ;





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



    $log.log("book_name :" +  $scope.book_name) ;
    $log.log("book_color :" +  $scope.book_color) ;
    $log.log("book_color_tint :" + $scope.book_color_tint);
    $log.log("book_inversed_layout :" +  $scope.book_inversed_layout) ;
    $log.log("book_badge :" +  $scope.book_badge) ;
    $log.log("book_img_number :" +  $scope.book_img_number) ;
    $log.log("book_imgs_1 :" +  $scope.book_imgs_1) ;
    $log.log("book_imgs_2 :" +  $scope.book_imgs_2) ;
    $log.log("book_imgs_3 :" +  $scope.book_imgs_3) ;
    $log.log("book_imgs_4 :" +  $scope.book_imgs_4) ;
    $log.log("book_imgs_5 :" +  $scope.book_imgs_5) ;
    $log.log("book_imgs_6 :" +  $scope.book_imgs_6) ;
    $log.log("book_imgs_7 :" +  $scope.book_imgs_7) ;










}]);







