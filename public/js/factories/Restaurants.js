angular.module('billApp')
    .factory('Restaurants', function() {
        function Restaurants(id, name, menu){
            this.id = id;
            this.name = name;
            this.menu = menu;
        }

        return Restaurants;
    });