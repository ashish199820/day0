var express= require("express");
var request= require("request");
var app=express();



app.get("/",function(req,res)
{
    res.render("home.ejs"); 
});
app.get("/love/:name",function(req,res)
{
    var name= req.params.name;

    res.render("love.ejs",{thingvar:name}); 
});
app.get("*",function(req,res){
    res.send("no such webpage");
});

app.listen(process.env.PORT,process.env.IP);
