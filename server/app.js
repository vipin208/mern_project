const dotenv= require("dotenv");
const mongoose=require('mongoose');
const express=require('express');
const app=express();
dotenv.config({path:'./config.env'});


require('./db/conn');//conn.js

app.use(express.json());//to convert data get from post man json to object
app.use(require('./router/auth'));//auth.js

app.get('/',(req,res)=>{
   res.send('hello world');
});
app.get('/aboutme',(req,res)=>{
    res.send('about me page');
 });

 app.get('/contact',(req,res)=>{
    res.send('contact page ');
 });

 app.get('/signup',(req,res)=>{
    res.send('sign up page');
 });
 
 app.get('/signin',(req,res)=>{
    res.send('sign in page');
 });
 

app.listen(5000,()=>{
    console.log('server is running')
})