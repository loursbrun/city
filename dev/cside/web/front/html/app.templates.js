angular.module('Bootstrap').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('html/views/view_book.html',
    "<div view-book id=\"view_book\" class=\"view-book\"><div class=\"book-container\" anim-arrow><div class=\"content-book\" style=\"left:{{book_inversed_layout === true ? '100' : '0'}}%\"><div class=\"title-book\"><h1 style=\"color:{{book_color}}\"><span class=\"{{book_badge}}\">{{book_name}}</span></h1></div><p class=\"description\">{{book_description}}</p><div class=\"li-container\"><li class=\"li-book\"><a class=\"link-book\" ng-click=\"pathTo('boxset')\"><img src=\"../deploy/deploy/assets/images/cities/{{book_name}}/cta.jpg\"></a> <a class=\"btnHeaderFourth\" ng-click=\"pathTo('boxset')\" ng-mouseenter=\"arrowMouseOver('arrow-brown-fourth')\" ng-mouseleave=\"arrowMouseOut('arrow-brown-fourth')\"><div class=\"arrow-brown-fourth\"></div><p>MORE DETAILS</p></a></li><li class=\"li-video\" ng-show=\"book_video_link == true\"><a class=\"link-video\" ng-click=\"pathTo('boxset')\"><img src=\"../deploy/deploy/assets/images/cities/{{book_name}}/video.jpg\"></a><br><a class=\"btnHeaderFifth\" ng-click=\"pathTo('boxset')\" ng-mouseenter=\"arrowMouseOver('arrow-brown-fifth')\" ng-mouseleave=\"arrowMouseOut('arrow-brown-fifth')\"><div class=\"arrow-brown-fifth\"></div><p>MORE DETAILS</p></a></li></div></div></div><div class=\"slideshow\" style=\"left:{{book_inversed_layout === true ? '0' : '50'}}%\"><div id=\"slide1\" class=\"slide\" style=\"background: url('../deploy/deploy/assets/images/{{book_imgs_1}}');position: absolute;width: 100%;height: 100%;background-size: cover; background-repeat: no-repeat;background-position: center\"></div><div id=\"slide2\" class=\"slide\" style=\"background: url('../deploy/deploy/assets/images/{{book_imgs_2}}');position: absolute;width: 100%;height: 100%;background-size: cover; background-repeat: no-repeat;background-position: center\"></div><div id=\"slide3\" class=\"slide\" style=\"background: url('../deploy/deploy/assets/images/{{book_imgs_3}}');position: absolute;width: 100%;height: 100%;background-size: cover; background-repeat: no-repeat;background-position: center\"></div><div id=\"slide4\" class=\"slide\" style=\"background: url('../deploy/deploy/assets/images/{{book_imgs_4}}');position: absolute;width: 100%;height: 100%;background-size: cover; background-repeat: no-repeat;background-position: center\"></div><div id=\"slide5\" class=\"slide\" style=\"background: url('../deploy/deploy/assets/images/{{book_imgs_5}}');position: absolute;width: 100%;height: 100%;background-size: cover; background-repeat: no-repeat;background-position: center\"></div><div id=\"slide6\" class=\"slide\" style=\"background: url('../deploy/deploy/assets/images/{{book_imgs_6}}');position: absolute;width: 100%;height: 100%;background-size: cover; background-repeat: no-repeat;background-position: center\"></div><div id=\"slide7\" class=\"slide\" style=\"background: url('../deploy/deploy/assets/images/{{book_imgs_7}}');position: absolute;width: 100%;height: 100%;background-size: cover; background-repeat: no-repeat;background-position: center\"></div><div id=\"slide8\" class=\"slide\" style=\"background: url('../deploy/deploy/assets/images/{{book_imgs_8}}');position: absolute;width: 100%;height: 100%;background-size: cover; background-repeat: no-repeat;background-position: center\"></div><figure class=\"tint\" style=\"background:{{book_color_tint}}\"></figure></div><div class=\"menu-container\"><a class=\"btnHeaderFirst\" ng-click=\"pathTo('cityguides')\" ng-mouseenter=\"arrowMouseOver('arrow-brown-first')\" ng-mouseleave=\"arrowMouseOut('arrow-brown-first')\"><div class=\"arrow-brown-first\"></div><p>RETURN TO THE COLLECTION</p></a> <a class=\"btnHeaderSecond\" ng-click=\"pathTo('exceptionalcase')\" ng-mouseenter=\"arrowMouseOver('arrow-brown-second')\" ng-mouseleave=\"arrowMouseOut('arrow-brown-second')\"><div class=\"arrow-brown-second\"></div><p>EXCEPTIONAL CASE<br>OF ALL CITIES</p></a> <a class=\"btnHeaderThird\" ng-click=\"pathTo('boxset')\" ng-mouseenter=\"arrowMouseOver('arrow-brown-third')\" ng-mouseleave=\"arrowMouseOut('arrow-brown-third')\"><div class=\"arrow-brown-third\"></div><p>BOX SET WITH A CHOISE<br>OF 5 CITIES</p></a></div></div>"
  );


  $templateCache.put('html/views/view_boxset.html',
    "<div view-boxset id=\"view_boxset\" class=\"view-boxset\"><div class=\"book-container\" anim-arrow><div class=\"menu-container\"><a class=\"btnHeaderFirst\" ng-click=\"pathTo('cityguides')\" ng-mouseenter=\"arrowMouseOver('arrow-brown-first')\" ng-mouseleave=\"arrowMouseOut('arrow-brown-first')\"><div class=\"arrow-brown-first\"></div><p>RETURN TO THE COLLECTION</p></a> <a class=\"btnHeaderSecond\" ng-click=\"pathTo('exceptionalcase')\" ng-mouseenter=\"arrowMouseOver('arrow-brown-second')\" ng-mouseleave=\"arrowMouseOut('arrow-brown-second')\"><div class=\"arrow-brown-second\"></div><p>EXCEPTIONAL CASE<br>OF ALL CITIES</p></a></div><div class=\"content-book\"><div class=\"title-book\"><h1><span>BOX SET WITH A CHOISCE OF 5 CITIES</span></h1></div><p class=\"description\">The Louis Vuitton City Guides may be purchased in a box set including any 5 destinations among the 21 in the entire collection.<br><br>Available exclusively in Louis Vuitton stores, this box set also makes an ideal gift for all urban explorers, who may thus be treated to guides for a group of cities reflecting their personalities and interests. Below we suggest just a few examples.<br><br>Fashion capitals: London, Milan, New York, Paris, Tokyo<br>Important centers for contemporary art: London, Miami, New York, São Paulo, Venice<br>Beach cities: Cape Town, Los Angeles, Rio de Janeiro, Singapore, Sydney<br>Business cities: London, Hong Kong, New York, Singapore, Tokyo</p></div></div><div class=\"slideshow\"><div id=\"slideCase\"></div></div></div>"
  );


  $templateCache.put('html/views/view_cityguides.html',
    "<div view-cityguides id=\"view_cityguides\" class=\"view-cityguides\"><div id=\"head\" anim-arrow><h1 id=\"logo\">LOUIS VUITTON CITY GUIDES</h1><p class=\"description\">Beautifully illustrated with exclusive photographs,<br>each year the Louis Vuitton City Guides explore new urban destinations.<br>Refreshed with up-to-date content, this collection remains in a class by itself,<br>now covering 21 of the world’s greatest cities.</p><a id=\"pdf\" class=\"button\" href=\"../deploy/deploy/assets/pdf/brochure_EN.pdf\" target=\"_blank\" ng-mouseenter=\"arrowMouseOver('arrow-white-pdf')\" ng-mouseleave=\"arrowMouseOut('arrow-white-pdf')\"><div class=\"arrow-white-pdf\"></div><p>SEE THE BROCHURE</p></a> <a class=\"btnHeaderFirst\" ng-click=\"pathTo('exceptionalcase')\" ng-mouseenter=\"arrowMouseOver('arrow-brown-first')\" ng-mouseleave=\"arrowMouseOut('arrow-brown-first')\"><div class=\"arrow-brown-first\"></div><p>EXPEPTIONAL CASE<br>OF ALL CITIES</p></a> <a class=\"btnHeaderSecond\" ng-click=\"pathTo('boxset')\" ng-mouseenter=\"arrowMouseOver('arrow-brown-second')\" ng-mouseleave=\"arrowMouseOut('arrow-brown-second')\"><div class=\"arrow-brown-second\"></div><p>BOX SET WITH A CHOISE<br>OF 5 CITIES</p></a></div><div class=\"book-container\"><ul class=\"coverflow\"><li id=\"beijing\"><a ng-click=\"pathTo('book',{city:'beijing'})\"><img src=\"../deploy/deploy/assets/images/cities/beijing/cover.png\"><p class=\"city\" style=\"color:#ef3046\">BEIJING</p></a></li><li id=\"berlin\"><a ng-click=\"pathTo('book',{city:'berlin'})\"><img src=\"../deploy/deploy/assets/images/cities/berlin/cover.png\"><p class=\"city\" style=\"color:#e98800\">BERLIN</p></a></li><li id=\"cape-town\"><a ng-click=\"pathTo('book',{city:'cape-town'})\"><img src=\"../deploy/deploy/assets/images/cities/cape-town/cover.png\"><p class=\"city\" style=\"color:#92a23c\">CAPE<br>TOWN</p></a></li><li id=\"hong-kong\"><a ng-click=\"pathTo('book',{city:'hong-kong'})\"><img src=\"../deploy/deploy/assets/images/cities/hong-kong/cover.png\"><p class=\"city\" style=\"color:#d4753c\">HONG<br>KONG</p></a></li><li id=\"istanbul\"><a ng-click=\"pathTo('book',{city:'istanbul'})\"><img src=\"../deploy/deploy/assets/images/cities/istanbul/cover.png\"><p class=\"city\" style=\"color:#a26288\">ISTANBUL</p></a></li><li id=\"london\"><a ng-click=\"pathTo('book',{city:'london'})\"><img src=\"../deploy/deploy/assets/images/cities/london/cover.png\"><p class=\"city\" style=\"color:#8a60a3\">LONDON</p></a></li><li id=\"los-angeles\"><a ng-click=\"pathTo('book',{city:'los-angeles'})\"><img src=\"../deploy/deploy/assets/images/cities/los-angeles/cover.png\"><p class=\"city\" style=\"color:#c36970\">LOS<br>ANGELES</p></a></li><li id=\"mexico\"><a ng-click=\"pathTo('book',{city:'mexico'})\"><img src=\"../deploy/deploy/assets/images/cities/mexico/cover.png\"><p class=\"city\" style=\"color:#f47236\">MEXICO<br>CITY</p></a></li><li id=\"miami\"><a ng-click=\"pathTo('book',{city:'miami'})\"><img src=\"../deploy/deploy/assets/images/cities/miami/cover.png\"><p class=\"city\" style=\"color:#28b785\">MIAMI</p></a></li><li id=\"milan\"><a ng-click=\"pathTo('book',{city:'milan'})\"><img src=\"../deploy/deploy/assets/images/cities/milan/cover.png\"><p class=\"city\" style=\"color:#d24747\">MILAN</p></a></li><li id=\"moscow\"><a ng-click=\"pathTo('book',{city:'moscow'})\"><img src=\"../deploy/deploy/assets/images/cities/moscow/cover.png\"><p class=\"city\" style=\"color:#00aaa8\">MOSCOW</p></a></li><li id=\"new-york\"><a ng-click=\"pathTo('book',{city:'new-york'})\"><img src=\"../deploy/deploy/assets/images/cities/new-york/cover.png\"><p class=\"city\" style=\"color:#c79439\">NEW<br>YORK</p></a></li><li id=\"paris\"><a ng-click=\"pathTo('book',{city:'paris'})\"><img src=\"../deploy/deploy/assets/images/cities/paris/cover.png\"><p class=\"city\" style=\"color:#2684c1\">PARIS</p></a></li><li id=\"rio\"><a ng-click=\"pathTo('book',{city:'rio'})\"><img src=\"../deploy/deploy/assets/images/cities/rio/cover.png\"><p class=\"city\" style=\"color:#c1873a\">RIO DE<br>JANEIRO</p></a></li><li id=\"seoul\"><a ng-click=\"pathTo('book',{city:'seoul'})\"><img src=\"../deploy/deploy/assets/images/cities/seoul/cover.png\"><p class=\"city\" style=\"color:#7272b0\">SEOUL</p></a></li><li id=\"shanghai\"><a ng-click=\"pathTo('book',{city:'shanghai'})\"><img src=\"../deploy/deploy/assets/images/cities/shanghai/cover.png\"><p class=\"city\" style=\"color:#02ac9f\">SHANGHAI</p></a></li><li id=\"singapore\"><a ng-click=\"pathTo('book',{city:'singapore'})\"><img src=\"../deploy/deploy/assets/images/cities/singapore/cover.png\"><p class=\"city\" style=\"color:#abc549\">SINGAPORE</p></a></li><li id=\"sydney\"><a ng-click=\"pathTo('book',{city:'sydney'})\"><img src=\"../deploy/deploy/assets/images/cities/sydney/cover.png\"><p class=\"city\" style=\"color:#00a0d5\">SYDNEY</p></a></li><li id=\"sao-paulo\"><a ng-click=\"pathTo('book',{city:'sao-paulo'})\"><img src=\"../deploy/deploy/assets/images/cities/sao-paulo/cover.png\"><p class=\"city\" style=\"color:#00934f\">SÃO<br>PAULO</p></a></li><li id=\"tokyo\"><a ng-click=\"pathTo('book',{city:'tokyo'})\"><img src=\"../deploy/deploy/assets/images/cities/tokyo/cover.png\"><p class=\"city\" style=\"color:#ed0088\">TOKYO</p></a></li><li id=\"venice\"><a ng-click=\"pathTo('book',{city:'venice'})\"><img src=\"../deploy/deploy/assets/images/cities/venice/cover.png\"><p class=\"city\" style=\"color:#bd4f99\">VENICE</p></a></li></ul></div></div>"
  );


  $templateCache.put('html/views/view_exceptionalcase.html',
    "<div view-exceptionalcase id=\"view_exceptionalcase\" class=\"view-exceptionalcase\"><div class=\"book-container\" anim-arrow><div class=\"menu-container\"><a class=\"btnHeaderFirst\" ng-click=\"pathTo('cityguides')\" ng-mouseenter=\"arrowMouseOver('arrow-brown-first')\" ng-mouseleave=\"arrowMouseOut('arrow-brown-first')\"><div class=\"arrow-brown-first\"></div><p>RETURN TO THE COLLECTION</p></a> <a class=\"btnHeaderSecond\" ng-click=\"pathTo('boxset')\" ng-mouseenter=\"arrowMouseOver('arrow-brown-second')\" ng-mouseleave=\"arrowMouseOut('arrow-brown-second')\"><div class=\"arrow-brown-second\"></div><p>BOX SET WITH A CHOISE<br>OF 5 CITIES</p></a></div><div class=\"content-book\"><div class=\"title-book\"><h1><span>EXCEPTIONAL CASE OF ALL 15 CITIES</span></h1></div><p class=\"description\">Designed with discerning travelers in mind, whether they are jet-setting from city to city or curling up in their favorite armchair, an exceptional case has been created specifically for this year’s Louis Vuitton City Guides, issued in a limited edition of 3,000 numbered copies.<br><br>All 15 cities may thus be stored in this indispensable box in lacquered wood, available in five eye-popping colors. Its clean lines and graceful proportions join in celebrating 15 years of Louis Vuitton City Guides.</p><li><img src=\"http://localhost/Fabien/city/deploy/deploy/assets/images/cities/exceptional-case/cta.jpg\"><br><a class=\"btnHeaderFourth\" ng-click=\"pathTo('boxset')\" ng-mouseenter=\"arrowMouseOver('arrow-brown-fourth')\" ng-mouseleave=\"arrowMouseOut('arrow-brown-fourth')\"><div class=\"arrow-brown-fourth\"></div><p>MORE DETAILS</p></a></li></div></div><div class=\"slideshow\"><div id=\"slideCase\"></div></div></div>"
  );


  $templateCache.put('html/views/view_home.html',
    "<div view-home id=\"view_home\" class=\"view-home\"><div view-video id=\"view_video\" class=\"view-video\" anim-arrow><div id=\"fcplayer_container\" video-mobile class=\"video-mobile\"></div></div><div class=\"skip-btn\" ng-mouseover=\"animSkipBtnOn()\" ng-mouseleave=\"animSkipBtnOff()\" ng-click=\"pathTo('cityguides')\"><div class=\"arrow-right\"></div><p>Skip the video</p></div></div>"
  );

}]);
