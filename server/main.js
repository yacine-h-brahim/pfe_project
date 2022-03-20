var express=require("express");
const mysql=require("mysql");
const parser= require("body-parser");
const Mail = require("nodemailer/lib/mailer");
const bcrypt=require("bcrypt");
var  connectDb=require("./connect_DB");
const app=express();
app.use("/",connectDb);
