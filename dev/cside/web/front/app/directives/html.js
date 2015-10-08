/**
 * Created by fabienbrun on 08/10/15.
 */

app.directive('html', ['$sce', function ($sce) {
    return {
        link: function (scope, element, attr) {
            scope.$watch("html", function (value) {
                //$sce.trustAsHtml()
                element.html(value);
            });
        },
        scope:{
            html:"="
        }
    };
}]);