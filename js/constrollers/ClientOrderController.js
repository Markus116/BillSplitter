angular.module("billApp")
    .controller('ClientOrderController', function ($scope, $routeParams, $location, ClientsFactory, Dish) {
        $scope.model = ClientsFactory;
        $scope.model.orderId = $routeParams.id;

        $scope.addClientDish = function (dish) {
            var dishCopy = new Dish(dish.id, dish.name, dish.price);
            $scope.model.currentClient.order.addDish(dishCopy);
        };

        $scope.removeClientDish = function (dish) {
            $scope.model.currentClient.order.removeDish(dish);
        };

        $scope.goToPersonalOrder = function(){
            $location.path("/personal-order");
        };

        $scope.approveOrder = function(){
            $location.path("/order:"+$scope.model.orderId );
        };
    });