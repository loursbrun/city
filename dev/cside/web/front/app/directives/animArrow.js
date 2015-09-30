/**
 * Created by fabienbrun on 30/09/15.
 */
app.directive('animArrow', ['$log', 'DeviceDetector', function ($log, $device) {




    function link(scope, element, attrs) {
        if($device.mobile() == null)
        {


            scope.arrowMouseOver = function(arrowId){

                var arrow =  angular.element(document.querySelector("." + arrowId));
                TweenMax.to(arrow,0.3,{delay:0,x:"50%",force3D:true});
                TweenMax.to(arrow,0.3,{delay:0.2,x:"-50%",force3D:true});
            }

            scope.arrowMouseOut = function(arrowId){

                var arrow =  angular.element(document.querySelector("." + arrowId));
                TweenMax.to(arrow,2,{opacity:1, force3D:true});
            }




            scope.animSkipBtnOn = function(){


                var skipBtn =  angular.element(document.querySelector(".skip-btn"));
                TweenMax.to(skipBtn,0.5,{delay:0,opacity:"1",force3D:true});

                var arrowRight =  angular.element(document.querySelector(".arrow-right"));
                TweenMax.to(arrowRight,0.2,{delay:0,x:"50%",force3D:true});
                TweenMax.to(arrowRight,0.2,{delay:0.2,x:"-50%",force3D:true});



            };

            scope.animSkipBtnOff = function(){

                var skipBtn =  angular.element(document.querySelector(".skip-btn"));
                TweenMax.to(skipBtn,0.5,{delay:0,opacity:"0.4",force3D:true});
            }



        }


    }


    return {
        restrict: 'A',
        link: link
    };
}]);
