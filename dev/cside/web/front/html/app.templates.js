angular.module('Bootstrap').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('html/components/product_detail.html',
    "<div class=\"product-detail\">{{currentProduct.label}}<div class=\"close-button\" ng-click=\"close()\"></div></div>"
  );


  $templateCache.put('html/views/view_home.html',
    "<div view-home id=\"view_home\" class=\"view-home\"><div class=\"home-pannel\"><div class=\"home-pannel-cell\"><div class=\"home-pannel-content\"><p>Home</p><p class=\"button\" ng-click=\"pathTo('product')\">Products</p></div></div></div></div>"
  );


  $templateCache.put('html/views/view_product.html',
    "<div view-product id=\"view_product\" class=\"view-product\"><div class=\"home-button\" ng-click=\"pathTo('home')\"></div><div class=\"title\"><h2>PRODUCTS</h2></div><div class=\"products\"><ol><li ng-repeat=\"product in products\" ng-click=\"pathTo('product.detail.zoom',product.key)\">{{product.label}}</li></ol></div><div class=\"product-detail-view\" ui-view></div></div>"
  );

}]);
