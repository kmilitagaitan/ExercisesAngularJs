/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('productcatalog', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: '../stubs/product.html',   controller: productController}).
      when('/phones/:productId', {templateUrl: '../stubs/productdetail.html', controller: productDetailController}).
      otherwise({redirectTo: '/phones'});
}]);
