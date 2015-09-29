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
        }).state('product', {
            url: "/product",
            controller : "ViewProductController",
            templateUrl: "html/views/view_product.html"
        }).state('product.detail', {
            url :"/detail",
            templateUrl : "html/components/product_detail.html",
            controller : "ProductDetailController"
        }).state('product.detail.zoom', {
            url :"/zoom/:product"
        });


}]);

app.run(function (){


});
