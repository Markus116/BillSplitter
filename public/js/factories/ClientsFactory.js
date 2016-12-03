angular.module('billApp')
    .factory("ClientsFactory", function (Dish,Client,Restaurants) {

        var factory = {};
        factory.CLIENT_NAMES = ['First Client', 'Second Client', 'Third Client', 'Forth Client', 'Fifth Client'];

        //clients
        factory.orderId = 0;
        var clientId = parseInt(Math.random() * 10000);

        factory.currentClient = new Client(clientId, factory.CLIENT_NAMES.shift());
        factory.clients = [factory.currentClient];

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


        //restaurants
        factory.restaurants = [
            {id:1, name: "Oliva", menu :{dishes:[
                {id:1, name:'Fresh Squeezed', price: 65},
                {id:2, name:'Fruit Bowl', price: 23},
                {id:3, name:' Bread Basket', price: 31},
                {id:4, name:'Buttermilk', price: 5},
                {id:5, name:'Blueberry Pan', price: 85},
                {id:6, name:' Muffins', price: 25},
                {id:5, name:'Omelette', price: 123},
                {id:6, name:'Pickled Cocoa', price: 31},
                {id:7, name:'Banana and White', price: 11},
            ]}},
            {id:2, name: "Mamamia", menu :{dishes:[
                {id:1, name:'Stuffed Vanilla', price: 43},
                {id:2, name:'Tenderized Cinnamon', price: 28},
                {id:3, name:'Sugar Crocodile', price: 53},
                {id:4, name:'Stuffed Cucumber', price: 161},
                {id:5, name:'Omelette', price: 234},
                {id:6, name:'Mushroom Vegetables', price: 310},
                {id:7, name:'Banana and White', price: 100},
                {id:8, name:'Rum and Plum Soufflé', price: 210},
                {id:9, name:'White Chocolate Wafer', price: 315},
                {id:10, name:' Peanut Molten Cake', price: 43}
            ]
            }},
            {id:3, name: "Under Wonder",menu :{dishes:[
                {id:1, name:'Fresh Squeezed', price: 65},
                {id:2, name:'Fruit Bowl', price: 23},
                {id:3, name:' Bread Basket', price: 31},
                {id:4, name:'Buttermilk', price: 5},
                {id:5, name:'Blueberry Pancakes', price: 85},
                {id:6, name:'Mushroom Vegetables', price: 310},
                {id:7, name:'Chocolate Genoise', price: 100},
                {id:8, name:'Plum Soufflé', price: 210},
                {id:9, name:'White Chocolate', price: 315},
                {id:10, name:' Peanut Molten', price: 43}
            ]}}
        ];

        factory.selectedRestaurant = undefined;
        factory.setSelectedRestaurant = function(item){
            console.log("setSelectedRestaurant1");
            factory.selectedRestaurant = jQuery.extend(true, {}, item);
            factory.selectedRestaurant.menu.dishes.forEach(function(dish) {
                dish.count = 0;
            });
        };

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