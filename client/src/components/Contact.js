import React from 'react'

const Contact = () => {
  
  return (
    <>
  <div className='contactus'>
        <div className="row">
			<h1 style={{textAlign:"center"}}>Connect by</h1>
	</div>
	<div className="row">
			<h4 style={{textAlign:"center"}}>I love to hear from you!</h4>
	</div>
        <form  method='get'>
          <div className='contactform'>
             <div className='roww'>
              <label className='label'>Name</label><br/>
              <input className='inputbox namein'   name='name' placeholder='your name..'></input>
             </div>
             <div className='contactflex'>
                    <div className='coll'>
                      <label className='label'>Email</label><br/>
                      <input className='inputbox emin' name='name' placeholder='your email..'></input>
                    </div>
                    <div className='coll'>
                     <label className='label'>Phone no</label><br/>
                      <input className='inputbox phin' name='name' placeholder='your phone number..'></input>
                    </div>
              </div>
              <div className='roww'>
                <label className='label'>Message</label><br/>
                <textarea className='inputbox msgin' name='name' placeholder='your message..'></textarea>
            </div>
            <div className='button'>
              <button className='buttonsend' name ="send">send</button>
            </div>
            </div>
        </form>

    </div>
    </>
  )
}

export default Contact
