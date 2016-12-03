angular.module("billApp")
    .controller('RestaurantsController', function ($scope, ClientsFactory, Restaurants) {
        $scope.model = ClientsFactory;

        $scope.setSelectedRestaurant = function(rest){
            console.log("setSelectedRestaurant", rest.name);
            ClientsFactory.setSelectedRestaurant(rest);
        };
    });