angular.module("billApp")
    .controller('NewOrderController',
        function ($scope, $location, ClientsFactory) {
        $scope.model = ClientsFactory;

        if (!$scope.model.selectedRestaurant) {
            $location.path("/restaurants");
            console.log('Navigate to restaurant selection');
            return;
        }

        $scope.createNewOrder = function(){
            var id = parseInt(Math.random() * 10000);
            navigateToOrder(id);
        };

        $scope.connectToOrder = function(id){
            navigateToOrder(id);
        };

        function navigateToOrder(id){
            $scope.model.orderId = id;
            $location.path("/menu-order");
        }
    });