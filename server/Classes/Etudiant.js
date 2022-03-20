const express=require("express");
const mysql=require("mysql");
var  Db=require("../configuration/config");
const app=express();
//app.use("/",Db);
Data_base=Db.Database();    
class Etudiant{
    constructor(Id,nom,prenom,email,password){
        this.Id=Id;
        this.nom=nom;
      this.prenom=prenom;
      this.email=email;
      this.password=password;
    }
    toString()
    {
    return (`Id  :${this.Id}\n nom  :${this.nom} \n prenom: ${ this.prenom}\n email:${this.email}\n password: ${this.password}`);
    
    }
    add_Etudiant(Etudiant)
    {
        
        var sql=`INSERT INTO Etudiant (Id_Etudiant,Nom,Prénom,Email,Password) VALUES (
           "${Etudiant.Id}",  "${Etudiant.nom}","${Etudiant.prenom}","${Etudiant.email}","${Etudiant.password}" )`;
           Data_base.query(sql,( err,result)=>{
            if (err) throw err;
        
        console.log("Etudiant has been added ...") ;
      });
    }

    }
    
    module.exports=Etudiant;
    //let student=new Etudiant("soufiane",21);
    //console.log(student.toString());