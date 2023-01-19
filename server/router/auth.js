const express= require('express');
const User = require('../models/userSchema');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const router=express.Router();
const Authenticate=require('../authenticate');
const cookieParser = require('cookie-parser');
router.use(cookieParser);

require('../db/conn');


router.get('/',(req,res)=>{
    res.send('hello router .js')
}); 

// using promises

// router.post('/register',(req,res)=>{
//    // console.log(req.body);
//     //res.json({message:req.body});
//     const {name, email,phone,work,password,cpassword}=req.body;
//     if(!name|| !email|| !phone|| !work|| !password|| !cpassword){
//         return res.status(422).json({error:"plz filled the required feild "});
//     }
//     User.findOne({email:email})
//     .then((userExist) =>{
//         if(userExist){
//             return res.status(422).json({error:"email already exits"});
//         }
//         const user =new User({name, email,phone,work,password,cpassword});
//         user.save().then(()=>{
//             res.status(201).json({message:"user register sucessfully"});
//         }).catch((err)=>res.status(500).json({error:"failed to register"}));
//     }).catch(err=>{console.log(err);});
    

// })

// using async-await

router.post('/register',async(req,res)=>{
    const {name, email,phone,password,cpassword}=req.body;
        if(!name|| !email|| !phone||  !password|| !cpassword){
        return res.status(422).json({error:"plz filled the required feild "});
        }
        try{
            const userExist=await User.findOne({email:email});
            if(userExist){
               return res.status(422).json({error:"email already exits"}); 
            }else if(password!=cpassword){
                return res.status(422).json({error:"password not matching"}); 
            }else{
            const user=new User({name,email,phone,password,cpassword});
            await user.save();
           return res.status(201).json({message:"user register sucessfull"});
            
            }
        }catch(err){
            console.log(err);

        }
});

router.post('/signin',async(req,res)=>{

    const {email,password}=req.body;
        if(!email|| !password) {
        return res.status(422).json({error:"plz filled the required feild "});
        }
        try{
            const userExist=await User.findOne({email:email });
            if(userExist){
                const isMatch= await bcrypt.compare(password,userExist.password);
                const token= await userExist.generateAuthToken();
                console.log(token);
                res.cookie('jwttoken',token,{
                    expires:new Date(Date.now()+25892000000),
                    httpOnly:true
                });

                if(!isMatch){
             
                   return res.json({error:"user signin  not sucessfull"});
                }else{
                    return res.json({message:"user signin sucessfull"});
                   
                }

            }else{
                return res.status(400).json({error:"invalid credentials"});
            }
       
        }catch(err){
            console.log(err);

        }
})


//about us page
 router.get('/about',Authenticate,(req,res)=>{
     console.log('about me page');
     res.send(req.rootUser);
  });

// router.get('/getdata',Authenticate,(req,res)=>{
//      console.log('about me page');
//      res.send(req.rootUser);
//   });



module.exports=router;