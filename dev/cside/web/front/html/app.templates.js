angular.module('Bootstrap').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('html/views/view_home.html',
    "<div view-home id=\"view_home\" class=\"view-home\"><div class=\"home-pannel\"><div class=\"home-pannel-cell\"><div class=\"home-pannel-content\"><p>Vidéo</p><p class=\"button\" ng-click=\"pathTo('product')\">Test</p></div></div></div></div>"
  );

}]);
