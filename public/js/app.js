var app = angular.module('billApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/restaurants",{
            controller: 'RestaurantsController',
            templateUrl: 'views/restaurants.html'
        })
        .when("/new-order",{
            controller: 'NewOrderController',
            templateUrl: 'views/new-order.html'
        })
        .when('/menu-order',{
            controller: 'MenuOrderController',
            templateUrl: 'views/menu-order.html'
        })
        .when('/personal-order',{
            controller: 'MenuOrderController',
            templateUrl: 'views/personal-order.html'
        })
        .when('/aggregated-order',{
            controller: 'MenuOrderController',
            templateUrl: 'views/aggregated-order.html'
        })
        .when('/hello-page',{
            controller: 'HelloPageController',
            templateUrl: 'views/hello-page.html'
        })
        .when('/search-page',{
            controller: 'SearchPageController',
            templateUrl: 'views/search-page.html'
        })
        .otherwise({
            redirectTo: '/hello-page'
        });

        $locationProvider.html5Mode(true);
});

app.filter('range', function() {
    return function(val, range) {
        range = parseInt(range);
        for (var i=0; i<range; i++)
            val.push(i);
        return val;
    };
});