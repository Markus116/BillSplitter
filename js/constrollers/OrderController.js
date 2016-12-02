angular.module("billApp")
    .controller('OrderController', function ($scope, $routeParams, ClientsFactory) {
        $scope.model = ClientsFactory;
        $scope.model.orderId = $routeParams.order;

        $scope.approveOrder = function(){
            console.log("approve order");
        }

        $scope.updateDishCount = function(dish,count){
            dish.count = count;
        }
    });