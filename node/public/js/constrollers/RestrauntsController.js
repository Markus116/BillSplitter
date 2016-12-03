angular.module("billApp")
    .controller('RestrauntsController', function ($scope, ClientsFactory, Restraunt) {
        $scope.model = ClientsFactory;

        $scope.setSelectedRestraunt = function(rest){
            console.log("setSelectedRestraunt", rest.name);
            ClientsFactory.setSelectedRestraunt(rest);
        };
    });