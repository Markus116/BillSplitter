angular.module('billApp')
    .factory('Client', function(Order) {
    function Client(id,name) {
        this.id = id;
        this.name = name;
        this.order = new Order(this.id);
    }

    return Client;
});