angular.module("billApp")
    .controller('BillController', function ($scope, ClientsFactory) {
        $scope.model = ClientsFactory;

        $scope.addClient = function () {
            ClientsFactory.addClient();
        };

        $scope.addDish = function () {
        };

        $scope.removeClient = function (client) {
            ClientsFactory.removeClient(client);
        };

        $scope.removeDish = function (client,dish) {
            ClientsFactory.removeDish(client,dish)
        };
    });