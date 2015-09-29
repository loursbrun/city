angular.module('Bootstrap').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('html/views/view_cityguides.html',
    "<div view-cityguides id=\"view_cityguides\" class=\"view-cityguides\">cityguides</div>"
  );


  $templateCache.put('html/views/view_home.html',
    "<div view-home id=\"view_home\" class=\"view-home\"><div class=\"home-pannel\"><div class=\"home-pannel-cell\"><div class=\"home-pannel-content\"><p>Vidéo</p><p class=\"button\" ng-click=\"pathTo('cityguides')\">Test</p></div></div></div></div>"
  );

}]);
