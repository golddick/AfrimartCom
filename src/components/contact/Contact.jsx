import React, {useState} from "react"
import axios from 'axios';
import img from "../../Assest /backimg2.jpg"
import Back from "../common/Back"
import "./contact.css"
import { IoCall , IoMail} from "react-icons/io5";


const Contact = () => {

  const [formData, setFormData] = useState({
    cname: '',
    email: '',
    pNumber:'',
    subject: '',
    des: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    try {
      await axios.post('https://afrimartapi.onrender.com/submit-contact-form', formData);
      alert('Form submitted successfully!');

      // alert(response.data.message);

      // You can customize this part based on your server response
    //   const emailContent = <Email formData={formData} />;
    //   console.log('Email Content:', emailContent);

    }catch (error) {
        if (error.response) {
          console.error('Error submitting form:', error.response.data);
        } else {
          console.error('Error submitting form:', error.message);
        }
        alert('Failed to submit form. Please try again.');
      }
  };


  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='We are happy to support you and answer all 
        your questions and inquiries ' cover={img} />
        <div className='container'>

          <div className="contactNum">
            <div className="cNum">
          <span className="cText"><IoMail/> </span>
          <span className="cText">+2347007770070</span>
            </div>
            <div className="cMail">
          <span className="cText"><IoCall/> </span>
          <span className="cText">Info@afrimart.biz</span>
        
            </div>
          </div>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' value={formData.cname} onChange={handleChange} name='cname' />
              <input type='text' placeholder='Email' value={formData.email} onChange={handleChange} name='email'/>
              <input type='text' placeholder='Phone Number ' value={formData.pNumber} onChange={handleChange} name='pNumber'/>
            </div>
            <input type='text' placeholder='Subject' value={formData.subject} onChange={handleChange} name='subject'/>
          <div className="decrip">
          <label htmlFor="description">Description</label>
            <textarea cols='30' rows='10' id="description" name="des" value={formData.des} onChange={handleChange} ></textarea>
          </div>
            <button onClick={handleSubmit}>Submit Request</button>
          </form>


        </div>
      </section>
    </>
  )
}

export default Contact
