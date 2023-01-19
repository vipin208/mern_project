import React, { useEffect } from 'react'
import logo from './images/vipin.jpg'
import { NavLink, useNavigate } from 'react-router-dom';


const About = () => {
   const navigate=useNavigate();
  const callAboutpage=async()=>{
    try{
      const res= await fetch('/about',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });
    const data =await res.json();
    console.log(data);
    if(!res.status===200){
      const error = new Error(res.error);
      throw error;
    }
    }catch(err){
     console.log(err);
     navigate('/login');

    }
  }
  useEffect(()=>{
   callAboutpage();
  },[]);



  const aboutcss={
   width:'450px',
   borderRadius:'20px',
  }
  return (
    <>
      <form method='GET'>
   <section id='about-section'>
  
      <div className='about-left'>
       <NavLink className ="" to ="#"><img src={logo} alt="logo"  style={aboutcss}/></NavLink>
      </div>
      <div className='about-right'>
        <h4>My Story</h4>
        <h1>About me</h1>
        <p>My name is Vipin jaiswal, I am a Full Stack Web Developer and Web Designer. An Open Source enthusiast and a Computer Science student from India.<br/>
           I love working on new and exciting technologies emerging nowadays.
        </p>
             <div className='address'>
              <ul>
                 <li>
                    <span className='address-logo'>
                    <i className="bi bi-person-circle"></i>
                     </span>
                     <p>User Id</p>
                    <span className='seprater'>:</span>
                    <p>987654321000</p>
                    
                 </li>
                 <li>
                    <span className='address-logo'>
                    <i className="bi bi-person"></i>
                     </span>
                     <p>Name</p>
                    <span className='seprater'>:</span>
                    <p>Vipin Jaiswal</p>
                 </li>
                 <li>
                    <span className='address-logo'>
                    <i className="bi bi-envelope"></i>
                     </span>
                     <p>Email</p>
                     <span className='seprater'>:</span>
                    <p>vipinjaiswal6400.vj@gmail.com</p>
                    
                 </li>
                 <li>
                    <span className='address-logo'>
                    <i className="bi bi-telephone"></i>
                     </span>
                     <p>Phone</p>
                    <span className='seprater'>:</span>
                    <p>+91 9023161696</p>
                   
                 </li>
              </ul>
             </div>
             <div className="expertise">
              <h5>TECH I'M FAMILIAR WITH</h5>
              <ul>
                 <li>
                  <span className='expertise-logo'>
                  <i className="bi bi-filetype-html"></i>
                  </span>
                  <p>HTML</p>
                 </li>
                 <li>
                  <span className='expertise-logo'>
                  <i class="bi bi-filetype-css"></i>
                  </span>
                  <p>CSS</p>
                 </li>
                 <li>
                  <span className='expertise-logo'>
                  <i className="bi bi-filetype-js"></i>
                  </span>
                  <p>Javascript</p>
                 </li>
                 <li>
                  <span className='expertise-logo'>
                  <i className="bi bi-filetype-jsx"></i>
                  </span>
                  <p>React</p>
                 </li>
              </ul>
             </div>
      </div>
      
   </section>
   </form>


    </>
  )
}

export default About
