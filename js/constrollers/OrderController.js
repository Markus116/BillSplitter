angular.module("billApp")
    .controller('OrderController', function ($scope, ClientsFactory) {
        $scope.model = ClientsFactory;

        $scope.createNewOrder = function(){

        };

        $scope.connectToOrder = function(id){

        }
    });