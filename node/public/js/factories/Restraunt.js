angular.module('billApp')
    .factory('Restraunt', function() {
        function Restraunt(id, name, menu){
            this.id = id;
            this.name = name;
            this.menu = menu;
        }

        return Restraunt;
    });