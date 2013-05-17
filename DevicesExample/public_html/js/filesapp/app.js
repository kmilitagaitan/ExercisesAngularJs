/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('phonecat', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: '../partials/Phone_List.html',   controller: PhoneListController}).
      when('/phones/:phoneId', {templateUrl: '../partials/Phone_Detail.html', controller: PhoneDetailController}).
      otherwise({redirectTo: '/phones'});
}]);
