angular.module('billApp')
    .factory('Dish', function() {
        function Dish(id,name,price){
            this.id = id;
            this.name = name;
            this.price = price;
        }

        return Dish;
    });