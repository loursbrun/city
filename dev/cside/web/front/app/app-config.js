//
//
// Angular Main App Config
//
//

app.config(['AnimationModelProvider', '$stateProvider', '$urlRouterProvider', function(animationModelProvider, $stateProvider, $urlRouterProvider) {

    var model = animationModelProvider.animationModel;
    var routes = model.global.routes;


    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            controller: "ViewHomeController",
            templateUrl: "html/views/view_home.html"
        })
        .state('cityguides', {
            url: "/cityguides",
            controller: "ViewCityguidesController",
            templateUrl: "html/views/view_cityguides.html"
        });


}]);

app.run(function (){


});
