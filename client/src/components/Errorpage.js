import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
  return (
    <>
    <div id="notfound">
        <div className='notfound'>
            <div className='notfound-404'>
                <h1>404</h1>

            </div>
            <h2>we are sorry page not found!</h2>
            <p className='mb-5'>
                the page you are looking for might have been remove had its name change or its temporarily unavailable
            </p>
            <NavLink to='/'> back to home page</NavLink>
        </div>

    </div>
      
    </>
  )
}

export default Errorpage
