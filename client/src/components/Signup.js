import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import style  from '../App.css';
const Signup = () => {
  const navigate=useNavigate();
  const [user,setUser]=useState({
    name:"",email:"",phone:"",password:"",cpassword:""
  })
  let name ,value;
  const handleInput=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});

  }

  const postData=async(e)=>{
    e.preventDefault();
    const {name, email,phone, password,cpassword}=user;
    const res =await fetch("/register",{
      method:"post",
      headers:{
        "content-Type":"application/json"
        
      },
      body:JSON.stringify({
        name,email,phone,password,cpassword
      })
    });
    const data =await res.json();
    if(res.status===422 || !data){
      window.alert('invalid registration ');
      console.log('invalid registration ');
    }else{
      window.alert('registration sucessfull');
      console.log('registration sucessfull');
      navigate('/login');
    }
  }
  return (
  <>
  <div className='bgcl'>
       <div className="container">
      <div className="card">
        <div className="card_title">
          <h1>Create Account</h1>
          <span>Already have an account? <NavLink to="/Login">Sign In</NavLink></span>
        </div>
        <div className="form">
        <form   action="/register" method="post">
          <input type="text" name="name" id="username" autocomplete="off"value={user.name} onChange={handleInput} placeholder="UserName" />
          <input type="email" name="email" autocomplete="off"value={user.email} onChange={handleInput} placeholder="Email" id="email" />
          <input type="phone" name="phone" autocomplete="off"value={user.phone} onChange={handleInput} placeholder="phone" id="phone" />
          <input type="password" name="password" autocomplete="off"value={user.password} onChange={handleInput} placeholder="Password" id="password" />
          <input type="cpassword" name="cpassword" autocomplete="off"value={user.cpassword} onChange={handleInput} placeholder="confirm Password" id="password" />
          {/* <NavLink to="/Home"> <button>Register</button></NavLink> */}
          <button onClick={postData}>Register</button>
          </form>
          {/* <div>
            <input type='submit' name='signup' id='signup' className='form-submit' value='register'></input>
          </div> */}
        </div>
        
      </div>
    </div>
    </div>  
    </>
  )
}

export default Signup

