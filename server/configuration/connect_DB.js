//import Labriries 
var express=require("express");
mysql=require( "mysql");
parser= require("body-parser");
//import custom modules
var config=require("./config");
// connect to  MYSQL Database
config.Database();       
var app=express();

app.use(express.static(__dirname));
//app.use(parser.urlencoded({ extended :true }));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/html_files/indexe.html");
});
app.post("/hi",(req,res)=>
{
    res.sendFile("hofjdojodjjfj");
})
//start the server 
app.listen(config.PORT,err=>{
    if(err) throw err
    else 
    console.log("Sever is listening to Port number :"+ config.PORT);
})
