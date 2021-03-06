var _ = require('underscore');
var config = require('config');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs');
var express = require('express');
var utils = require("./utils");
var fs = require('fs');

var app = express();
app.use(bodyParser.json());

//app.use('/orders',express.static('public'));
app.use(cors());

//try {
//    console.log("dataPath " + config.get('dataPath'));
//    fs.mkdirSync(config.get('dataPath'));
//} catch (ex) {
//    if (ex.code != 'EEXIST') {
//        throw ex;
//    }
//}

app.use(function (req, res, next) {
    var filePath = 'public/views' + req.path + '.html';
    var exists = path.extname(filePath);
    console.log("Requesting " + req.path + ' ' + filePath + ' exists:' + exists + ', path:' + path);

    if (fs.existsSync(filePath)) {
        console.log('Force return index.html');
        // should force return `index.html` for angular.js
        req.url = '/index.html';
        next();
    } else {
        // Normal static resource
        next();
    }
});

/** STATIC ASSETS **/
app.use(express.static('public'));

app.post("/addorder/:orderId/client/:clientId",function (request, response) {
    console.log("Got response: " + response.statusCode);
    var orderId = request.params.orderId;
    var clientId = request.params.clientId;
    console.log("Got response: ",orderId,clientId);
    var data = "";

    //does not work (((
    // todo implement
    response.on('data', function(chunk) {
        data+=chunk;
        console.log('data');
    });

    response.on('end', function(){
        console.log('end',data);
        response.end();
    });

    /*function saveJson(data) {
        utils.createOrderDir(orderId,function (data) {
            if(data.status != "ok"){
                res.status(400).send("Error");
                return;
            }

            fs.writeFile(config.get('dataPath')+orderId + "/" + clientId+".json",json,function (err, res) {
                if(err){
                    console.log(err);
                    res.status(500).send("TRError " + err);
                    return;
                }

                console.log("JSON File saved");
                res.end();
            })
        })
    }*/

});

app.get("/getorder/:id",function(req, res) {
    var orderId = req.params.id;
    // todo implement jsons aggregation for by orderId
    res.status(200).send("REs");
});

var server = app.listen(process.env.PORT || config.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
});