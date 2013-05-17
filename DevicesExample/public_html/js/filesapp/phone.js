/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function PhoneListController($scope,$http)
{
    /*$scope.phones=
    [
        {
          "name": "Nexus",
          "description":"Fast just got faster with Nexus S.",
          "age":1
        },
        {
          "name": "Motorola XOOM™ with Wi-Fi",
          "description":"he Next, Next Generation tablet.",
          "age":2
        },
        {
          "name": "MOTOROLA XOOM™",
          "description":"The Next, Next Generation tablet.",
          "age":3
        }
    ];*/
    
    
        $http.get('../phones/phones.json').success(function(data) {
            $scope.phones = data;
            
            //data.splice limit query
        });
    
        $scope.orderProp = 'age';
}


function PhoneDetailController($scope, $routeParams,$http) {
  $http.get('../phones/' + $routeParams.phoneId + '.json').success(function(data) {
    $scope.phone = data;  
});

}


