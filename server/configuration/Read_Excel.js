const express = require("express");
const Etudiant=require("../Classes/Etudiant");
var xlsx= require("xlsx");
var workbook =xlsx.readFile("../Data/etudiant1.xlsx");
let worksheet=workbook.Sheets[workbook.SheetNames[0]];
for(let index=2;index<21;index++){
    const Id=worksheet[`A${index}`].v;
    const Nom=worksheet[`B${index}`].v;
    const Prénom=worksheet[`C${index}`].v;
    const Email=worksheet[`D${index}`].v;
    const Password=worksheet[`E${index}`].v;
   /* function id(min,max){
        return Math.floor(
            Math.random()*(min-max)*min
        )
    }*/

    const etudiant=new Etudiant(Id,  Nom,Prénom,Email,Password);
    etudiant.add_Etudiant(etudiant);


}