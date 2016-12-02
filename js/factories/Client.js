angular.module('billApp')
    .factory('Client', function() {
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