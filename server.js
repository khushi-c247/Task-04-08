"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var fs = require("fs");
var Server = http.createServer(function (req, res) {
    //Get data from file
    if (req.method === "GET") {
        fs.readFile("data.txt", function (err, data) {
            if (err) {
                console.log(err);
            }
            res.end(data);
        });
    }
    //Save data to the data.txt file
    else if (req.method === "POST") {
        var data_1 = " ";
        req.on("data", function (chunk) {
            data_1 += chunk;
            fs.writeFile("data.txt", data_1, function (err) {
                if (err) {
                    console.log(err);
                }
                res.end("This Data is saved succsessfully: ".concat(data_1));
            });
        });
    }
});
Server.listen(3000, function () {
    console.log("servert activated at port 3000");
});
