var app = angular.module('billApp', ['ngRoute']);

app.config(function ($routeProvider) {
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
        .otherwise({
            redirectTo: '/restraunts'
        });
});