//
//
// ViewHomeController
//
// @author Didier Brun
//

app.controller("ViewHomeController", ['$scope', '$log', 'DeviceDetector', function ViewHomeController($scope, $log, device)
{

    $log.log("View Home Controller");

    device.setLayout(DeviceDetector.LAYOUT_FILL);


}]);



app.directive('videoMobile', ['$log', '$window', 'AnimationModel', '$freeCasterUtils',  '$timeout', '$state', 'DeviceDetector', 'TrackerUtils', function ($log, $window, $model, $freecaster, $timeout, $state, $device, $tracker)
{

    function link(scope, element, attrs)
    {

        var cookie_name = "timeVideo_xavier_dolan";
        var default_video_id = $model.global.videos.default_video_id;
        var id_video = "fcplayer";
        scope.currentState = "default";

        function setup()
        {
            scope.player = $freecaster.loadVideo(default_video_id, playerConfig(), $model.global.config.video_player_url);

            scope.player.onReady = function () {
                scope.player.api.eventListener("jwplayerMediaComplete", completeHandler);
                scope.player.api.eventListener("jwplayerPlayerState", playerStatus);



                scope.player.api.eventListener("jwplayerPlayerState", checkOverlay);
                scope.player.api.eventListener("jwplayerMediaBeforePlay", beforePlayHandler);


                scope.player.api.eventListener("jwplayerFullscreen", function(){
                    layout();
                    $timeout(layout,300);
                });

                var bg = element.css('background-image');
                bg = bg.replace('url(','').replace(')','');


                var $img =  element[0].querySelector("#fcplayer_jwplayer_display_image");
                $img.src = bg;

                $timeout(function(){
                    $img.src = bg;
                },500);
                $timeout(function(){
                    $img.src = bg;
                },1000);

                scope.playerLoaded();
                layout();
                $timeout(layout,300);
                scope.$on(GlobalEvents.ORIENTATION_CHANGE, function(){
                    layout();
                    $timeout(layout,300);
                });
            }



            function forceLocalVideo(){
                if(window._fc_init_fcplayer && window.jwplayer){
                    try {
                        window._fc_init_fcplayer();

                    } catch (e){
                        $log.log("error",e)

                    }

                }else{

                    $timeout(forceLocalVideo,300);
                }
            }
            if (window.location.href.indexOf('localhost') >= 0 || window.location.href.indexOf('192.') >= 0)
                forceLocalVideo();


        }
        //fix gtab3
        function beforePlayHandler() {

            if ($device.tablet() == 'SamsungTablet') {
                $timeout(function () {

                    var notThatCool2 = document.getElementById(id_video + "_jwplayer_display");


                    angular.element(notThatCool2).css("display", "none");

                }, 1000);
            }


            //  var notThatCool2 = document.getElementById(id_video+"_jwplayer_controlbar_fullscreenButton");
            // notThatCool2.css("display","none");
        }

        function checkOverlay(state) {


            if ($device.tablet() == 'SamsungTablet') {
                var notThatCool2 = document.getElementById(id_video + "_jwplayer_display");
                if (state.newState == "PAUSED" || state.newState == "IDLE") {
                    angular.element(notThatCool2).css("display", "none");
                }
                else {
                    angular.element(notThatCool2).css("display", "block");
                }
            }

            // var notThatCool2 = document.getElementById(id_video+"_jwplayer_controlbar_fullscreenButton");
            //notThatCool2.css("display","none");

        }

        function hideOverlay(state){

        }
        function showOverlay(state){

        }
        function completeHandler()
        {

        }

        function playerStatus(status)
        {
            if(status.newstate == "PLAYING" && scope.currentState != 'default')
            {
                scope.player.api.pause();
            }
        }

        function playerConfig()
        {

            if($device.tablet() != null)
            {
                var config = {
                    width: element.prop('offsetWidth'),
                    height: element.prop('offsetHeight'),
                    stretching: "uniform",
                    icons:true,
                    loc: $model.locale
                }
            }
            else
            {
                var config = {
                    width: element.prop('offsetWidth'),
                    height: element.prop('offsetHeight'),
                    stretching: "uniform",

                    icons:true,
                    disablenativeplayer:"(^$)",
                    loc: $model.locale
                }
            }
            if($device.tablet() != null && scope.samsung )
            {

                var config = {
                    width: element.prop('offsetWidth'),
                    height: element.prop('offsetHeight'),
                    stretching: "uniform",
                    icons:true,
                    //disablenativeplayer:"(^$)",
                    loc: $model.locale
                }

            }


            return config;
        }
        scope.playerLoaded = function()
        {
            if($device.phone() != null && $device.os() == "iOS")
                element.css('background-image',"none");
        };
        function layout()
        {
            if (scope.player)
            {

                currentWidth = element.prop("offsetWidth");
                currentHeight = element.prop("offsetHeight");


                //currentHeight =currentHeight*1.05;
                /*if ($device.os() == "iOS" && $device.tablet()) {
                 currentHeight -=10;

                 }*/
                scope.player.api.resize(currentWidth,currentHeight);
            }
        }

        setup();

        scope.$on('$destroy',function(){
            scope.$$listeners[GlobalEvents.ORIENTATION_CHANGE] = [];
        });
    }

    return {
        restrict: 'A',
        link: link
    };

}]);


app.directive('viewVideo', ['$log', '$window', 'AnimationModel', '$freeCasterUtils',  '$timeout', '$state', 'DeviceDetector', 'TrackerUtils', '$rootScope', function ($log, $window, $model, $freecaster, $timeout, $state, $device, $tracker, $root)
{

    function link(scope, element, attrs)
    {

        var forceScrollTop = function(){
            console.log("$(window).scrollTop()",$(window).scrollTop());
            if($(window).scrollTop() != 0){
                $(window).scrollTop(0);
                $timeout(function(){
                    forceScrollTop();
                },5);
            }
        }
        forceScrollTop();
        var cookie_name = "timeVideo_xavier_dolan";
        var default_video_id = $model.global.videos.default_video_id;
        var id_video = "fcplayer";
        /// scope.path = $model.path+'assets/images/';
        scope.havePlayed = false;

        if($device.mobile() == null)
        {
            currentDevice = 'Desktop';
        }
        else if($device.tablet() != null)
        {
            currentDevice = 'Tablet';
        }
        else if($device.phone() != null)
        {
            currentDevice = 'Mobile';
        }
        // $tracker.trackPage("video", {ambassador:scope.ambassador.id_tracking ,device: currentDevice});

        function setup()
        {

            scope.player = $freecaster.loadVideo(default_video_id, playerConfig(), $model.global.config.video_player_url);

            scope.player.onReady = function () {
                scope.player.api.eventListener("jwplayerMediaComplete", completeHandler);
                if($device.tablet() == null) scope.player.api.eventListener("jwplayerMediaTime", timeCheck);
                scope.player.api.eventListener("jwplayerPlayerState", playerStatus);



                scope.player.api.eventListener("jwplayerPlayerState", checkOverlay);
                scope.player.api.eventListener("jwplayerMediaBeforePlay", beforePlayHandler);


                if ($device.tablet() != null) scope.player.api.eventListener("jwplayerFullscreen", fullscreen);
                scope.playerLoaded();
                layout();
                scope.$on(GlobalEvents.RESIZE, function(){
                    $timeout(layout,300);
                });
                scope.$on(GlobalEvents.ORIENTATION_CHANGE, function(){
                    $timeout(layout,300);
                });
            }

            function fullscreen(e) {


                $log.log("fullscreen", e);
                scope.fullscreen = e.fullscreen;
                if (e.fullscreen == true) {
                    element.css("top", "-50px");
                    element.css("left", "0px");
                    element.css("right", "0px");
                    element.css("bottom", "0px");
                    var footer = angular.element(document.getElementById("footer"));
                    footer.css("display", "none");
                    var header = angular.element(document.getElementById("header"));
                    header.css("display", "none");
                } else {



                    element.css("top", "0px");
                    element.css("left", "0px");
                    element.css("right", "0px");
                    element.css("bottom", "0px");

                    var footer = angular.element(document.getElementById("footer"));
                    footer.css("display", "block");
                    var header = angular.element(document.getElementById("header"));
                    header.css("display", "block");
                }
                layout();
            }
            function forceLocalVideo(){
                if(window._fc_init_fcplayer && window.jwplayer){
                    try {
                        window._fc_init_fcplayer();

                    } catch (e){
                        $log.log("error",e)

                    }

                }else{

                    $timeout(forceLocalVideo,300);
                }
            }
            if (window.location.href.indexOf('localhost') >= 0 || window.location.href.indexOf('192.') >= 0)
                forceLocalVideo();



        }


        function completeHandler()
        {

            $.jStorage.deleteKey(cookie_name);
            $root.currentAmbassadorRequested = "xavier_dolan";



            /*
             if(scope.ambassador.id == 'ryoichi_kurokawa')
             {
             $.jStorage.deleteKey('timeVideo_ryoichi_kurokawa');
             $root.currentAmbassadorRequested = "alex_olson";
             }
             else
             {
             $.jStorage.deleteKey('timeVideo_alex_olson');
             $root.currentAmbassadorRequested = 'ryoichi_kurokawa';
             }*/
            $state.go("video", {ambassadorID: $root.currentAmbassadorRequested});
        }

        function timeCheck(time)
        {
            /* if(scope.havePlayed == true)
             {

             $.jStorage.set(cookie_name, time.position);
             }*/
            $.jStorage.set(cookie_name, time.position);
            if(time.position < (time.duration / 2) )
            {
                // if(scope.ambassador.id == 'ryoichi_kurokawa'){
                scope.highlightProduct = 0;
                /* }
                 else
                 {
                 scope.highlightProduct = 1;
                 }*/
            }
            else
            {
                // if(scope.ambassador.id == 'ryoichi_kurokawa')  {
                scope.highlightProduct = 2;
                /* }
                 else
                 {
                 scope.highlightProduct = 3;
                 }*/
            }
            if (scope.$$phase != '$apply' && scope.$$phase != '$digest') {
                scope.$apply();
            }
        }

        function playerStatus(status)
        {
            if(status.newstate == "PLAYING" && scope.currentState != 'default')
            {
                scope.player.api.pause(true);
            }
        }

        function playerConfig()
        {

            if($device.tablet() != null)
            {
                var config = {
                    width: element.prop('offsetWidth'),
                    height: element.prop('offsetHeight'),
                    stretching: "fill",
                    icons:true,
                    autostart: false,
                    loc: $model.locale
                }
            }
            else
            {
                var config = {
                    width: element.prop('offsetWidth'),
                    height: element.prop('offsetHeight'),
                    stretching: "fill",
                    autostart: false,
                    icons:false,
                    disablenativeplayer:"(^$)",
                    loc: $model.locale
                }
            }
            if($device.tablet() != null && scope.samsung )
            {
                var config = {
                    width: element.prop('offsetWidth'),
                    height: element.prop('offsetHeight'),
                    stretching: "uniform",
                    icons:true,
                    //disablenativeplayer:"(^$)",
                    loc: $model.locale
                }
            }

            return config;
        }
        //fix gtab3
        function beforePlayHandler() {

            if (scope.samsung) {

                $timeout(function () {

                    var notThatCool2 = document.getElementById(id_video + "_jwplayer_display");

                    angular.element(notThatCool2).css("display", "none");

                }, 1000);
            }


            //  var notThatCool2 = document.getElementById(id_video+"_jwplayer_controlbar_fullscreenButton");
            // notThatCool2.css("display","none");
        }

        function checkOverlay(state) {


            if (scope.samsung) {
                var notThatCool2 = document.getElementById(id_video + "_jwplayer_display");
                if (state.newState == "PAUSED" || state.newState == "IDLE") {
                    angular.element(notThatCool2).css("display", "none");
                }
                else {
                    angular.element(notThatCool2).css("display", "block");
                }
            }

            // var notThatCool2 = document.getElementById(id_video+"_jwplayer_controlbar_fullscreenButton");
            //notThatCool2.css("display","none");

        }
        function hideOverlay(state){
            if($device.tablet() != null)
            {
                var iconHolder = document.querySelector("#fcplayer_jwplayer_display");
                angular.element(iconHolder).css("display","none");
            }
        }
        function showOverlay(state){
            if($device.tablet() != null)
            {
                var iconHolder = document.querySelector("#fcplayer_jwplayer_display");
                angular.element(iconHolder).css("display","block");
            }
        }
        scope.playerLoaded = function()
        {



            scope.$apply();
            if($device.tablet() != null) {
                var cacheTime = $.jStorage.get(cookie_name);
                if (cacheTime != null) {
                    scope.player.api.seek(cacheTime);
                }
            }
            /*
             if(scope.ambassador.id == 'ryoichi_kurokawa')
             {
             var cacheTime = $.jStorage.get("timeVideo_ryoichi_kurokawa");
             if(cacheTime != null)
             {
             scope.player.api.seek(cacheTime);
             }
             }
             else
             {
             var cacheTime = $.jStorage.get("timeVideo_alex_olson");
             if(cacheTime != null)
             {
             scope.player.api.seek(cacheTime);
             }
             }*/
            if($device.tablet() != null)
            {
                $timeout(layout,300);
            }
            else
            {
                if( scope.currentState == 'default')
                {
                    scope.player.api.play(true);
                }
                else
                {
                    scope.player.api.pause(true);
                }
            }
            scope.$watch("currentState",function(newVal, oldVal){

                if((newVal != oldVal && oldVal != undefined) || (newVal != "default"))
                {
                    var state = scope.player.api.getState();
                    if(newVal != 'default')
                    {
                        scope.player.api.pause(true);
                        hideOverlay();
                    }
                    else
                    {
                        if($device.tablet() != null)
                        {
                            $timeout(function(){
                                if(scope.havePlayed == false)
                                {

                                    /*
                                     if(scope.ambassador.id == 'ryoichi_kurokawa')
                                     {
                                     var cacheTime = $.jStorage.get("timeVideo_ryoichi_kurokawa");
                                     if(cacheTime != null)
                                     {
                                     scope.player.api.seek(cacheTime);
                                     scope.player.api.play(true);
                                     }
                                     else
                                     {
                                     scope.player.api.play(true);
                                     }
                                     }
                                     else
                                     {
                                     var cacheTime = $.jStorage.get("timeVideo_alex_olson");
                                     if(cacheTime != null)
                                     {
                                     scope.player.api.seek(cacheTime);
                                     scope.player.api.play(true);
                                     }
                                     else
                                     {
                                     scope.player.api.play(true);
                                     }
                                     }*/

                                    var cacheTime = $.jStorage.get(cookie_name);
                                    if(cacheTime != null)
                                    {
                                        scope.player.api.seek(cacheTime);
                                        scope.player.api.play(true);
                                    }
                                    else
                                    {
                                        scope.player.api.play(true);
                                    }

                                }
                                else
                                {
                                    scope.player.api.play(true);
                                }
                                showOverlay();
                            },600);
                        }
                        else
                        {
                            if(scope.havePlayed == false)
                            {


                                var cacheTime = $.jStorage.get(cookie_name);
                                if(cacheTime != null)
                                {
                                    scope.player.api.seek(cacheTime);
                                    scope.player.api.play(true);
                                }
                                else
                                {
                                    scope.player.api.play(true);
                                }
                            }
                            else
                            {
                                scope.player.api.play(true);
                            }
                            showOverlay();
                        }
                        scope.havePlayed = true;
                    }
                }
            });
        };
        function layout()
        {
            if (scope.player)
            {
                var currentHeight;
                var currentWidth;
                if($device.tablet() != null)
                {
                    currentWidth = $window.innerWidth;
                    currentHeight = $window.innerHeight - 100;
                }
                else
                {
                    currentWidth = element.prop("offsetWidth");
                    currentHeight = $window.innerHeight - 120;
                }
                scope.player.api.resize(currentWidth,currentHeight);
            }

        }

        $timeout(setup,1000);

        scope.$on('$destroy',function(){
            scope.$$listeners[GlobalEvents.RESIZE] = [];
            scope.$$listeners[GlobalEvents.ORIENTATION_CHANGE] = [];
        });
    }

    return {
        restrict: 'A',
        link: link
    };

}]);


