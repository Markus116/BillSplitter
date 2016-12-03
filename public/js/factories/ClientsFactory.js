angular.module('billApp')
    .factory("ClientsFactory", function (Dish,Client,Restraunt) {
        var factory = {};
        //clients
        factory.orderId = 0;
        var clientId = parseInt(Math.random()*10000);


        factory.currentClient = new Client(clientId,"User"+clientId);

        /*factory.addClient = function () {
            //var client = {name:this.newClient, dishes:[], selectedDish:undefined};
            var client = new Client(this.clients.length+1, this.newClient);
            this.clients.push(client);
            this.newClient = "";
        };

        factory.removeClient = function (client) {
            return removeItem(this.clients,client);
        };*/
        //clients


        //restraunts
        factory.restraunts = [
            {id:1, name: "Oliva", menu :{dishes:[
                {id:1, name:'Fresh Squeezed Orange', price: 65},
                {id:2, name:'Fruit Bowl', price: 23},
                {id:3, name:' Bread Basket', price: 31},
                {id:4, name:'Buttermilk', price: 5},
                {id:5, name:'Blueberry Pancakes', price: 85},
                {id:6, name:' Muffins', price: 25},
                {id:5, name:'Sautéed Walnuts & Omelette', price: 123},
                {id:6, name:'Pickled Cocoa & Mushroom Vegetables', price: 31},
                {id:7, name:'Banana and White Chocolate Genoise', price: 11},
            ]}},
            {id:2, name: "Mamamia", menu :{dishes:[
                {id:1, name:'Stuffed Vanilla & Mint Venison', price: 43},
                {id:2, name:'Tenderized Cinnamon Turkey', price: 28},
                {id:3, name:'Pressure-Fried Sugar Crocodile', price: 53},
                {id:4, name:'Stuffed Cucumber & Lime Cockles', price: 161},
                {id:5, name:'Sautéed Walnuts & Omelette', price: 234},
                {id:6, name:'Pickled Cocoa & Mushroom Vegetables', price: 310},
                {id:7, name:'Banana and White Chocolate Genoise', price: 100},
                {id:8, name:'Rum and Plum Soufflé', price: 210},
                {id:9, name:'White Chocolate Wafer', price: 315},
                {id:10, name:' Peanut Molten Cake', price: 43}
            ]
            }},
            {id:3, name: "Under Wonder",menu :{dishes:[
                {id:1, name:'Fresh Squeezed Orange', price: 65},
                {id:2, name:'Fruit Bowl', price: 23},
                {id:3, name:' Bread Basket', price: 31},
                {id:4, name:'Buttermilk', price: 5},
                {id:5, name:'Blueberry Pancakes', price: 85},
                {id:6, name:'Pickled Cocoa & Mushroom Vegetables', price: 310},
                {id:7, name:'Banana and White Chocolate Genoise', price: 100},
                {id:8, name:'Rum and Plum Soufflé', price: 210},
                {id:9, name:'White Chocolate Wafer', price: 315},
                {id:10, name:' Peanut Molten Cake', price: 43}
            ]}}
        ];

        factory.selectedRestraunt = undefined;
        factory.setSelectedRestraunt = function(rest){
            if(factory.selectedRestraunt == undefined || factory.selectedRestraunt.id != rest.id){
                console.log("setSelectedRestraunt");
                factory.selectedRestraunt = rest;
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