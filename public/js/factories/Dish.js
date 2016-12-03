angular.module('billApp')
    .factory('Dish', function() {
        function Dish(id,name,price,count){
            this.id = id;
            this.name = name;
            this.price = price;
            this.count = count;
        }

        return Dish;
    });