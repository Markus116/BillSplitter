angular.module("billApp")
    .controller('HelloPageController', function ($scope, $location) {
        $scope.goToRestorantsNearYou = function(){
            $location.path("/restaurants");
        };

        $scope.serchFoodPage = function(){
            $location.path("/search-page");
        };
    });