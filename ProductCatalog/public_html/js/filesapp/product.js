/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function productController($scope,$http)
{
    
    $http.get('../phones/phones.json').success(function(data) {
            $scope.products = data;
            
            //data.splice limit query
        });
}

function productControllerSplice($scope,$http)
{
     $http.get('../phones/phones.json').success(function(data) {
            $scope.products = data.splice(0,3);
            
        });
}

function productDetailController($scope, $routeParams,$http) {
  $http.get('../phones/' + $routeParams.productId + '.json').success(function(data) {
    $scope.products = data;  
});
}