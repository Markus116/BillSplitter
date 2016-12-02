angular.module("billApp")
    .controller('OrdersController',
        function ($scope,$location,ClientsFactory) {
        $scope.model = ClientsFactory;

        $scope.createNewOrder = function(){
            var id = parseInt(Math.random() * 10000);
            navigateToOrder(id);
        };

        $scope.connectToOrder = function(id){
            navigateToOrder(id);
        };

        function navigateToOrder(id){
            $location.path("/order:" + id);
        }
    });