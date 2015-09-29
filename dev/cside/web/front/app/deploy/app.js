define(function() { 
    function initialize() {

        var appendContent = ""

        $("#app").append("#APPEND#");

        angular.bootstrap(document, [animationName]);
    }
    return {
        initialize: initialize
    };
});
