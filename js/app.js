var app = angular.module('billApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/restraunts",{
            controller: 'RestrauntsController',
            templateUrl: 'views/restraunts.html'
        })
        .when("/order",{
            controller: 'BillController',
            templateUrl: 'views/order.html'
        })
        .when('/bill', {
            controller: 'BillController',
            templateUrl: 'views/bill.html'
        })
        .otherwise({
            redirectTo: '/restraunts'
        });
});

app.controller('BillController', function ($scope, ClientsFactory, Dish, Client, Restraunt) {
    $scope.model = ClientsFactory;

    $scope.addClient = function () {
        ClientsFactory.addClient();
    };

    $scope.addDish = function () {
        console.log("Add dish");
        var dishIndex = parseInt(Math.random() * ClientsFactory.selectedRestraunt.menu.dishes.length);
        var dish = ClientsFactory.selectedRestraunt.menu.dishes[dishIndex];
        var clientIndex = parseInt(Math.random() * ClientsFactory.clients.length);
        var client = ClientsFactory.clients[clientIndex];
        ClientsFactory.addDish(client,dish);
    };

    $scope.removeClient = function (client) {
        ClientsFactory.removeClient(client);
    };

    $scope.removeDish = function (client,dish) {
        ClientsFactory.removeDish(client,dish)
    };
});

app.factory("ClientsFactory", function (Dish,Client,Restraunt) {
    var factory = {};

    //clients
    factory.newClient="";
    factory.clients = [];

    factory.addClient = function () {
        //var client = {name:this.newClient, dishes:[], selectedDish:undefined};
        var client = new Client(this.clients.length+1, this.newClient);
        this.clients.push(client);
        this.newClient = "";
    };

    factory.removeClient = function (client) {
        return removeItem(this.clients,client);
    };
    //clients


    //restraunts
    factory.restraunts = [
        {id:1, name: "Oliva", menu :{dishes:[{id:1, name:'Oliva dish1', price: 1},{id:2, name:'Oliva dish2', price: 2},{id:3, name:' Olivadish3', price: 3}]}},
        {id:2, name: "Mamamia", menu :{dishes:[{id:1, name:'Mamamia dish1', price: 1},{id:2, name:'Mamamia dish2', price: 2},{id:3, name:' Mamamia dish3', price: 3}]}},
        {id:3, name: "Under Wonder",menu :{dishes:[{id:1, name:'Under Wonder dish1', price: 1},{id:2, name:'Under Wonder dish2', price: 2},{id:3, name:' Under Wonder dish3', price: 3}]}}
    ];

    factory.selectedRestraunt = undefined;
    factory.setSelectedRestraunt = function(rest){
        if(factory.selectedRestraunt == undefined || factory.selectedRestraunt.id != rest.id){
            factory.selectedRestraunt = rest;
            //reset dishes
            this.clients.forEach(function(obj){
                obj.dishes.length = 0;
            });
        }
    };
    //restraunts


    //dishes
    factory.addDish = function(user, dish){
        user.dishes.push(dish);
        updateClientTotal(user);
    };

    factory.removeDish = function(client, dish){
        var result = removeItem(client.dishes,dish);
        updateClientTotal(client);
        return result;
    };
    //dishes

    function updateClientTotal(client){
        var sum = 0;
        for (var i = 0; i < client.dishes.length; i++) {
            var dish = client.dishes[i];
            sum = sum + dish.price;

        }
        return sum;
    }

    // utils
    function removeItem(arr, item){
        var index = arr.indexOf(item);
        if(index != -1){
            arr.splice(index,1);
            return true;
        } else{
            return false;
        }
    }

    return factory;
});

app.factory('Dish', function() {
    function Dish(id,name,price,count){
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = count || 1;

        this.calculatedPrice = function() {
            return this.count * this.price;
        }
    }

    return Dish;
});

app.factory('Restraunt', function() {
    function Restraunt(id, name, menu){
        this.id = id;
        this.name = name;
        this.menu = menu;
    }

    return Restraunt;
});

app.factory('Client', function() {
    function Client(id,name) {
        this.id = id;
        this.name = name;
        this.dishes = [];
        this.total = 0;
        this.selectedDish = undefined;

        this.addDish = function (dish) {
            var isNewDish = true;
            for (var i = 0; i < this.dishes.length; i++) {
                var dish = this.dishes[i];
                if(dish.id == dish.id){
                    dish.count += 1;
                    isNewDish = false;
                    break;
                }
            }

            if(isNewDish){
                this.dishes.push(dish);
            }

            this.total += dish.price;
        };

        this.removeDish = function(dish){
            var index = this.dishes.indexOf(dish);
            if(index != -1){
                this.dishes.splice(index,1);
                this.total -= dish.calculatedPrice();
            }
        };

        this.resetDishes = function () {
            this.dishes.length = 0;
            this.total = 0;
            this.selectedDish = undefined;
        };
    }

    return Client;
});