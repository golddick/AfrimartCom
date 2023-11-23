 import React from 'react';


function Email({ formData }) {
  return (
    <div className='Email'>
      <h1>Email from Enterprise Form</h1>
      <p>Here is the information submitted through the form:</p>

      <p className="label">Company Name:</p>
      {/* <p>{formData.companyName}</p> */}
      <p>hello</p>

      <p className="label">Sector:</p>
      {/* <p>{formData.sector}</p> */}
      <p>sector</p> 
      {/* Include other fields as needed */}
    </div>
  );
}

export default Email;


