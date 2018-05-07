var express = require("express");
var mysql   = require("mysql");
var bodyParser  = require("body-parser");
var md5 = require('MD5');
var rest = require("./REST.js");
var app  = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {

    router.get("/",function(req,res){
        res.json({"Message" : "Hello World !!!!"});
    })

    router.get("/comments",function(req,res){
        res.setHeader('Access-Control-Allow-Origin', '*');

        var query = "SELECT * FROM ??";
        var table = ["comments"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json(rows);
            }
        });
    });
    

    router.post("/comments",function(req, res, next){
        res.setHeader('Access-Control-Allow-Origin', '*');
        /* res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next(); */

        var query = "INSERT INTO ??(??,??) VALUES (?,?)";
        var table = ["comments", "name", "comments", req.body.name, req.body.comments];   
        query = mysql.format(query, table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Comment Added !"});
            }
        });
    });


}


module.exports = REST_ROUTER;