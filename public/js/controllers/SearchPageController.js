angular.module("billApp")
    .controller('SearchPageController', function ($scope, $location) {
        $scope.goToRestorantsNearYou = function(){
            $location.path("/restaurants");
        };

        $scope.serchFoodPage = function(){

        };
    });