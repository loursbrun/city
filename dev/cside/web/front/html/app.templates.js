angular.module('Bootstrap').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('html/views/view_book.html',
    "<div view-book id=\"view_book\" class=\"view-book\">book</div>"
  );


  $templateCache.put('html/views/view_boxset.html',
    "<div view-boxset id=\"view_boxset\" class=\"view-boxset\">Boxset</div>"
  );


  $templateCache.put('html/views/view_cityguides.html',
    "<div view-cityguides id=\"view_cityguides\" class=\"view-cityguides\">cityguides<p class=\"button\" ng-click=\"pathTo('home')\">Back</p><p class=\"button\" ng-click=\"pathTo('exceptionalcase')\">Exceptional Case</p><p class=\"button\" ng-click=\"pathTo('boxset')\">Boxe Set</p><p class=\"button\" ng-click=\"pathTo('book',{city:'berlin'})\">Berlin</p><p class=\"button\" ng-click=\"pathTo('book',{city:'paris'})\">Paris</p></div>"
  );


  $templateCache.put('html/views/view_exceptionalcase.html',
    "<div view-exceptionalcase id=\"view_exceptionalcase\" class=\"view-exceptionalcase\">Exceptionalcase</div>"
  );


  $templateCache.put('html/views/view_home.html',
    "<div view-home id=\"view_home\" class=\"view-home\"><div class=\"home-pannel\"><div class=\"home-pannel-cell\"><div class=\"home-pannel-content\"><p>Vidéo</p><p class=\"button\" ng-click=\"pathTo('cityguides')\">Skip the vidéo</p></div></div></div></div>"
  );

}]);
