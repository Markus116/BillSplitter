angular.module("billApp")
    .controller('SearchPageController', function ($scope, $location) {
        $scope.goToRestorantsNearYou = function(){
            $location.path("/restraunts");
        };

        $scope.serchFoodPage = function(){

        };
    });