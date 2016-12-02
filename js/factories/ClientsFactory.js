angular.module('billApp')
    .factory("ClientsFactory", function (Dish,Client,Restraunt) {
        var factory = {};
        //clients
        factory.newClient="";
        factory.orderId = 0;
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