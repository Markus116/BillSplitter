var app = angular.module('billApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/restraunts",{
            controller: 'RestrauntsController',
            templateUrl: 'views/restraunts.html'
        })
        .when("/new-order",{
            controller: 'NewOrderController',
            templateUrl: 'views/new-order.html'
        })
        .when('/menu-order',{
            controller: 'ClientOrderController',
            templateUrl: 'views/menu-order.html'
        })
        .when('/personal-order',{
            controller: 'ClientOrderController',
            templateUrl: 'views/personal-order.html'
        })
        .when('/order:id',{
            controller: 'ClientOrderController',
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