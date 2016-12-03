angular.module('billApp')
    .factory('GroupOrder', function(Order) {
        function GroupOrder(id){
            this.id = id;
            this.orders = [];
            this.total = 0;

            this.addSubOrder = function (order) {
                this.orders.push(order);
                this.total += order.total;
            }

            this.removeSubOrder = function (order) {
                var index = this.orders.indexOf(order);
                if(index != -1){
                    this.orders.splice(index,1);
                    this.total -= order.total;
                }
            }
        }
    });
