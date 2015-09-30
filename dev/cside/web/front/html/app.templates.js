angular.module('Bootstrap').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('html/views/view_book.html',
    "<div view-book id=\"view_book\" class=\"view-book\">book</div>"
  );


  $templateCache.put('html/views/view_boxset.html',
    "<div view-boxset id=\"view_boxset\" class=\"view-boxset\">Boxset</div>"
  );


  $templateCache.put('html/views/view_cityguides.html',
    "<div view-cityguides id=\"view_cityguides\" class=\"view-cityguides\"><div id=\"head\" anim-arrow><h1 id=\"logo\">LOUIS VUITTON CITY GUIDES</h1><p class=\"description\">Beautifully illustrated with exclusive photographs,<br>each year the Louis Vuitton City Guides explore new urban destinations.<br>Refreshed with up-to-date content, this collection remains in a class by itself,<br>now covering 21 of the world’s greatest cities.</p><a id=\"pdf\" class=\"button\" href=\"http://localhost/Fabien/city_guide/deploy/deploy/pdf/brochure_EN.pdf\" target=\"_blank\" ng-mouseenter=\"arrowMouseOver()\" ng-mouseleave=\"arrowMouseOut()\"><div class=\"arrow-right\"></div><p>SEE THE BROCHURE</p></a></div><p class=\"button\" ng-click=\"pathTo('home')\">Back</p><p class=\"button\" ng-click=\"pathTo('exceptionalcase')\">Exceptional Case</p><p class=\"button\" ng-click=\"pathTo('boxset')\">Boxe Set</p><p class=\"button\" ng-click=\"pathTo('book',{city:'berlin'})\">Berlin</p><p class=\"button\" ng-click=\"pathTo('book',{city:'paris'})\">Paris</p></div>"
  );


  $templateCache.put('html/views/view_exceptionalcase.html',
    "<div view-exceptionalcase id=\"view_exceptionalcase\" class=\"view-exceptionalcase\">Exceptionalcase</div>"
  );


  $templateCache.put('html/views/view_home.html',
    "<div view-home id=\"view_home\" class=\"view-home\"><div view-video id=\"view_video\" class=\"view-video\"><div id=\"fcplayer_container\" video-mobile class=\"video-mobile\"></div></div><div class=\"skip-btn\" ng-mouseover=\"animSkipBtnOn()\" ng-mouseleave=\"animSkipBtnOff()\" ng-click=\"pathTo('cityguides')\"><div class=\"arrow-right\"></div><p>Skip the video</p></div></div>"
  );

}]);
