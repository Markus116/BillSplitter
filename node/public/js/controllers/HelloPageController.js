angular.module("billApp")
    .controller('HelloPageController', function ($scope, $location) {
        $scope.goToRestorantsNearYou = function(){
            $location.path("/restraunts");
        };

        $scope.serchFoodPage = function(){
            $location.path("/search-page");
        };
    });