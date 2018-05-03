var mysql = require("mysql");
function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {

   router.get("/comments",function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
        var query = "SELECT * FROM ??";
        var table = ["comments"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "coins" : rows});
            }
        });
    });

    router.put("/comments",function(req,res){
        console.log(req.body);
        res.setHeader('Access-Control-Allow-Origin', '*');
        var query = "UPDATE ?? SET ?? = ?? + ? WHERE ?? = ?";
        var table = ["name","email","comments", req.body.value,"ID",req.body.playerid];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Updated the password for email "+req.body.email});
            }
        });
    });


}

module.exports = REST_ROUTER;
