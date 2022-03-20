const mysql=require("mysql");
var config={
   
    Db:{
          //mysql database configuration...
            host:'localhost',
            user:'root',
            password: '1234',
           database:'site_web'
    },


Database:function(){
    const Database=mysql.createConnection({
        host:'localhost',
        user:'root',
        password: '1234',
       database:'site_web'
       
    })
    Database.connect((error)=>{
        if(error)throw error;
         console.log("database connected ....");
    });
    return Database;
}
}
module.exports=config;