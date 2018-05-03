var mysql = require("mysql");
function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {

    router.get("/",function(req,res){
        res.json({"Message" : "Hello World !!!!"});
    })

    router.get("/comments",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["comments"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });

   /*  router.post("/comment",function(req,res){
        var query = "INSERT INTO ??(??,??) VALUES (?,?)";
        var table = ["comments"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "User Added !"});
            }
        });
    }); */

}


module.exports = REST_ROUTER;