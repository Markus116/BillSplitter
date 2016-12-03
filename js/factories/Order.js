angular.module('billApp')
    .factory('Order', function(Dish) {
        function Order(clientId,clientName){
            this.clientId = clientId;
            this.clientName = clientName || "Client "+clientId;
            this.dishes = [];
            this.total = 0;

            this.addDish = function (dish) {
                this.dishes.push(dish);
                this.total += dish.price;
            };

            this.removeDish = function (dish) {
                var index = this.dishes.indexOf(dish);
                if(index != -1){
                    this.dishes.splice(index,1);
                    this.total -= dish.price;
                }
            };

            this.reset = function () {
                this.dishes.length = 0;
                this.total = 0;
            };
        }

        return Order;
    });
