import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom';

const Login = () => {
 const navigate=useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const loginUser=async(e)=>{
    e.preventDefault();//it use to prevnt the by default lodging functionality
   const res=await fetch('/signin',{
    method:"post",
    headers:{
      "content-Type":"application/json"
    },
    body:JSON.stringify({
      email,password
    })
   });
   const data=res.json();
   if(res.status===400 || !data){
      window.alert('invalid credentials');
   }else{
    window.alert("login sucessfull");
    navigate('/Home');
   }
    }
  return (
    <>
    
     <div className="container">
      <div className="card">
        <div className="card_title">
          <h1>Sign-in</h1>
          <span>Create new account? <NavLink to="/Signup">Sign up</NavLink></span>
        </div>
        <div className="form">
        <form action="/register" method="post">
         
          <input type="email" name="email" placeholder="Email" id="email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" name="password" placeholder="Password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          
          {/* <NavLink to="/Home"> <button>Register</button></NavLink> */}
          <button  onClick={loginUser}>log-in</button>
          </form>
        </div>
        
      </div>
    </div>
    
   
    </>
  )
}


export default Login
