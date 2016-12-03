angular.module("billApp")
    .controller('ClientOrderController', function ($scope, $routeParams, $location, ClientsFactory, HttpService, Dish) {
        $scope.model = ClientsFactory;

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
        }

        $scope.approveOrder = function(){
            console.log('approveOrder');
            var json = angular.toJson($scope.model.currentClient.order);
            console.log($scope.model.orderId,json);
            HttpService.saveSubOrder($scope.model.orderId,$scope.model.currentClient.id,{json:json})
                .success(function(response) {
                    console.log("RES",response);
                    //todo save results to model and go to aggregated order view
                    //todo use GroupOrder
                    //$location.path("/order:"+$scope.model.orderId );
                })
                .error(function(data, status) {
                    console.log("ERROR",data,status);
                })
                .catch(function(error) {
                    console.log("ERROR",error);
                });

        }
    });