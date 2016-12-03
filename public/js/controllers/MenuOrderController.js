angular.module("billApp")
    .controller('MenuOrderController', function ($scope, $routeParams, $location, ClientsFactory, HttpService, Dish, Client) {
        $scope.model = ClientsFactory;

        if (!$scope.model.selectedRestaurant) {
            console.log('Navigate to restaurant selection');
            $location.path("/restaurants");
            return;
        }

        $scope.addClientDish = function (dish) {
            var dishCopy = new Dish(dish.id, dish.name, dish.price);
            dish.count++;
            $scope.model.currentClient.order.addDish(dishCopy);
        };

        $scope.removeClientDish = function (dish) {
            $scope.model.currentClient.order.removeDish(dish);
        };

        $scope.goToPersonalOrder = function(){
            $location.path("/personal-order");
        };

        $scope.updateAggregatedOrder = function(orderId){
            HttpService.getOrder(orderId)
                .success(function(response) {
                    console.log("RES",response);
                })
                .error(function(data, status) {
                    console.log("ERROR",data,status);
                })
                .catch(function(error) {
                    console.log("ERROR");
                });
        };

        $scope.approveOrder = function() {
            console.log('approveOrder');

            $location.path("/aggregated-order");
            return;

            var json = angular.toJson($scope.model.currentClient.order);
            console.log($scope.model.orderId,json);
            HttpService.saveSubOrder($scope.model.orderId,$scope.model.currentClient.id,{json:json})
                .success(function(response) {
                    console.log("RES",response);
                    //todo save results to model and go to aggregated order view
                    //todo use GroupOrder
                    //$location.path("/order:" + $scope.model.orderId );
                    $location.path("/aggregated-order");
                })
                .error(function(data, status) {
                    console.log("ERROR",data,status);
                })
                .catch(function(error) {
                    console.log("ERROR",error);
                });
        };

        $scope.newClient = function() {
            console.log('approveOrder');

            var clientId = parseInt(Math.random() * 10000);

            $scope.model.currentClient = new Client(clientId,"User" + clientId);
            $scope.model.clients.push($scope.model.currentClient);
            $location.path('/menu-order');
        };

        $scope.selectClient = function(client) {
            console.log('selectClient ' + client.name);

            $scope.model.currentClient = client;
            $location.path('/menu-order');
        };

        $scope.getAggregatedTotal = function() {
            return $scope.model.clients.reduce(function(clientSum, client) {
                return client.order.dishes.reduce(function(dishSum, dish) {
                    return dishSum + dish.price;
                }, clientSum);
            }, 0);
        }
    });