var app = angular.module('billApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/restraunts",{
            controller: 'RestrauntsController',
            templateUrl: 'views/restraunts.html'
        })
        .when("/orders",{
            controller: 'OrdersController',
            templateUrl: 'views/orders.html'
        })
        .when('/order:id',{
            controller: 'OrderController',
            templateUrl: 'views/order.html'
        })
        .otherwise({
            redirectTo: '/restraunts'
        });
});