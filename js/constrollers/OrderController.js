angular.module("billApp")
    .controller('OrderController', function ($scope, $routeParams, ClientsFactory, Dish) {
        $scope.model = ClientsFactory;
        $scope.model.orderId = $routeParams.order;

        $scope.addClientDish = function (dish) {
            var dishCopy = new Dish(dish.id, dish.name, dish.price);
            $scope.model.currentClient.order.addDish(dishCopy);
        };

        $scope.removeClientDish = function (dish) {
            $scope.model.currentClient.order.removeDish(dish);
        };

        $scope.approveOrder = function(){
            console.log("approve order");
        };
    });