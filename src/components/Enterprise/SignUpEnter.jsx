import React from 'react'
import './RegisterEnter.css'

function SignUpEnter() {
  return (
    <div className='SignUpEnter'>
        <div className="SignUpEnterBox">
            <h3 className='boxHeader'>Business Details</h3>
            <div className="EnterForm">
                <div className="formInput">
                    <h3 className='formName'>Company Name</h3>
                    <input type="text" placeholder='Company Name'className='input' />
                </div>
                <div className="formInput">
                    <h3 className='formName'>Sector</h3>
                    <input type="text" placeholder='Sector'className='input' />
                </div>
                <div className="formInput">
                    <h3 className='formName'>Business Type</h3>
                    <input type="text" placeholder='Business Type'className='input' />
                </div>
                <div className="formInput">
                    <h3 className='formName'>Business Registration No</h3>
                    <input type="text" placeholder='Registration No'className='input' />
                </div>
                <div className="formInput">
                    <h3 className='formName'>Business Address</h3>
                    <input type="text" placeholder='Business Address'className='input' />
                </div>
                <div className="formInput">
                    <h3 className='formName'>Business Website</h3>
                    <input type="text" placeholder='Business Website'className='input' />
                </div>
                <div className="formInput">
                    <h3 className='formName'>No Of Employees</h3>
                    <input type="text" placeholder=' Employees'className='input' />
                </div>
                <div className="formInput">
                    <h3 className='formName'>Annual TurnOver</h3>
                    <input type="text" placeholder=' $100,000'className='input' />
                </div>
                <div className="formInput">
                    <h3 className='formName'>Country Of Location</h3>
                    <input type="text" placeholder=' Country'className='input' />
                </div>
                <div className="formInput">
                    <h3 className='formName'>City Of Location</h3>
                    <input type="text" placeholder='City 'className='input' />
                </div>
            </div>
        </div>

        <div className="SignUpEnterBox">
            <h3 className='boxHeader'>Main Contact(s) Info</h3>
            <div className="EnterForm">
                <div className="formInput">
                    <h3 className='formName'>Full Name</h3>
                    <input type="text" placeholder='Full Name'className='input' />
                </div>
                <div className="formInput">
                    <h3 className='formName'>Telephone</h3>
                    <input type="number" placeholder='+123456789'className='input' />
                </div>
                <div className="formInput">
                    <h3 className='formName'>E-Mail Address</h3>
                    <input type="text" placeholder='john@gmail.com'className='input' />
                </div>
                <div className='formInput'>
                {/* <label htmlFor="largeTextArea">Large Text Area:</label> */}
                <h3 className='formName'>Tell us more about your Business(optional)</h3>
                <textarea
                    id="TextArea"
                    name="TextArea"
                    rows="10"  
                    cols="50" 
                    placeholder="Type your text here..."
                    className='TextArea-input'
                />
                </div>

                <button>Send</button>
            </div>
        </div>
    </div>
  )
}

export default SignUpEnter