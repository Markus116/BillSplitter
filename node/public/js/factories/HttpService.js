angular.module("billApp")
    .factory("HttpService",function ($http) {
        return {
            saveSubOrder:function (orderId,clientId,data) {
                var url = "http://localhost:3030/addorder/"+orderId+"/client/"+clientId;

               /* return $http({
                    method: 'POST',
                    url: url,
                    headers: {'Content-Type': 'application/json'},
                    data: data
                });*/
                return $http.post(url,data,{
                    header : {'Content-Type' : 'application/json'}});
            },

            getOrder:function (orderId) {
                var url = "http://localhost:3030/getorder/" + orderId;
                return $http.get(url);
            }
        }
    });
