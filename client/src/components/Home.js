import React from 'react'
import html from './images/html.jpg'
import css from './images/unsplash.jpg'
import javascript from './images/javascript.jpg'
import react from './images/react.jpg'
import nodejs from './images/nodejs.png'
import expressjs from './images/express.png'
import mongodb from './images/mongodb.png'

const Home = () => {
 
   return (
    <>
    
     <div className='containerr'>
      <div className='left-text'>
        <h2 className='heading'>MERN DEVELOPERS</h2>
        <p className='subheading'>while(<span style={{color:'red'}}> no Success </span>)</p><br/>
        <p className='subheadingg bracket'>{'{'}</p><br/>
        <p className='subheadingg'>tryAgain {'( ) ;'}</p><br/>
        <p className='subheadingg'>if  (<span style={{color:'red'}}> Dead </span>)</p><br/>
        <p className='subheadingg'>break{' ;'}</p><br/>
        <p className='subheadingg bracket'>{'}'}</p><br/>

      </div>
      <div className='gallery'>
        <div className='box row-2' style={{backgroundImage:`url(${html})`}}>HTML</div>
        <div className='box col-2' style={{backgroundImage:`url(${css})`}}>css</div>
        <div className='box' style={{backgroundImage:`url(${javascript})`}}>javascript</div>
        <div className='box row-2' style={{backgroundImage:`url(${react})`}}>react</div>
        <div className='box col-2' style={{backgroundImage:`url(${nodejs})`}}>nodejs</div>
        <div className='box' style={{backgroundImage:`url(${expressjs})`}}>expressjs</div>
        <div className='box col-2' style={{backgroundImage:`url(${mongodb})`}}>mongodb</div>

      </div>

    </div>
    
   
    </>
  )
}

export default Home
