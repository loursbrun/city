/**
 * Created by fabienbrun on 30/09/15.
 */
app.directive('animArrow', ['$log', 'DeviceDetector', function ($log, $device) {




    function link(scope, element, attrs) {
        if($device.mobile() == null)
        {




            scope.arrowMouseOver = function(scope, element, attrs){

                var arrow =  angular.element(document.querySelector(".arrow-right"));
                TweenMax.to(arrow,0.3,{delay:0,x:"50%",force3D:true});
                TweenMax.to(arrow,0.3,{delay:0.2,x:"-50%",force3D:true});
            }

            scope.arrowMouseOut = function(scope, element, attrs){

                var arrow =  angular.element(document.querySelector(".arrow-right"));
                TweenMax.to(arrow,2,{opacity:1, force3D:true});
            }






        }

        /* else if($device.tablet() != null)
         {
         var $deco = element[0].querySelector(".decoration");
         var $label = element[0].querySelector(".label");
         element.bind("touchstart",function()
         {
         TweenMax.to($deco,.2,{top:0});
         TweenMax.to($label,.2,{opacity:1});
         });
         element.bind("touchend",function()
         {
         TweenMax.to($deco,.2,{top:"100%"});
         TweenMax.to($label,.2,{opacity:0});
         });
         }*/
    }


    return {
        restrict: 'A',
        link: link
    };
}]);
