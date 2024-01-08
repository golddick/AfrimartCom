import React ,{useState, useEffect}from 'react'
import './RegisterEnter.css'
import axios from 'axios';
import Email from '../Email/Email';
import { Country, State, City }  from 'country-state-city';


function SignUpEnter() {

// console.log(Country.getAllCountries())
// console.log(State.getAllCities())

const countries = Country.getAllCountries();

    const TurnOver = [
        '<$50,000', '$50,001 > $250,000', '$250,001 > $500,000', '$500,001 > $1,000,000', 'Others'
    ]
    const Sector = [
        'Export Promotion Agencies', 'Private Sector Alliances ', 'Bank And Financial Institutions ', 'Chambers of Commerce', 'Regional Economic Alliances','Independent E-commerce Operators','Others'
    ]

    const About = [
        'Instagram', 'Twitter ', 'Facebook', 'Linkedln', 'Other'
    ]

    const [formData, setFormData] = useState({
        companyName: '',
        sector: '',
        businessType: '',
        registrationNo: '',
        businessAddress: '',
        businessWebsite: '',
        employees: '',
        annualTurnover: '',
        country: '',
        city: '',
        fullName: '',
        telephone: '',
        emailAddress: '',
        description: '',
        about:'',
      });
      const [cities, setCities] = useState([]);

 // Update the cities list when the selected country changes
 useEffect(() => {
    if (formData.country) {
      const selectedCountry = countries.find(
        (country) => country.name === formData.country
      );
      const countryCities = City.getCitiesOfCountry(selectedCountry.isoCode);
      setCities(countryCities);
    }
  }, [formData.country, countries]);



    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('Form Data:', formData);
        try {
          await axios.post('https://afrimartapi.onrender.com/submit-form', formData);
          alert('Form submitted successfully!');
        }catch (error) {
            if (error.response) {
              console.error('Error submitting form:', error.response.data);
            } else {
              console.error('Error submitting form:', error.message);
            }
            alert('Failed to submit form. Please try again.');
          }
      };
    

    //   const convertToPDF = (formData) => {
       
    //     console.log('Converting to PDF...');
    //     const content = generatePDFContent(formData);
      
    //     const filename = formData.companyName ? `${formData.companyName}data.pdf` : 'Enterprise-data.pdf';
    //     console.log('Filename:', filename);
    //     // Convert HTML content to PDF
    //     const pdfOptions = {
    //       margin: 10,
    //       filename: filename,
    //       image: { type: 'jpeg', quality: 0.98 },
    //       html2canvas: { scale: 2 },
    //       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    //     };
    //     if (!formData.companyName) {
    //         alert('Company name is missing. Unable to generate PDF.');
    //         return;
    //       }
        
    //     html2pdf().from(content).set(pdfOptions).outputPdf((pdf) => {
    //       // Trigger a download of the PDF
    //       const blob = new Blob([pdf], { type: 'application/pdf' });
    //       const link = document.createElement('a');
    //       link.href = window.URL.createObjectURL(blob);
    //       link.download = pdfOptions.filename;
    //       link.click();

    //       console.log('Generated PDF:', pdf);

    //     });
    //   };
    
    //   const generatePDFContent = (formData) => {
    //     // Generate HTML content for the PDF
    //     return `
    //       <div>
    //         <h1>Form Data</h1>
    //         <p>Company Name: ${formData.companyName}</p>
    //         <p>Sector: ${formData.sector}</p>
    //         <!-- Add other form fields as needed -->
    //       </div>
    //     `;
    //   };
    


  return (
    <div className='SignUpEnter'>
        <div className="SignUpEnterBox">
            <h3 className='boxHeader'>Business Details </h3>
            <div className="EnterForm">
                <div className="formInput">
                    <h3 className='formName'>Company Name *</h3>
                    <input type="text" placeholder='Company Name'className='input' value={formData.companyName} onChange={handleChange} name='companyName' required/>
                </div>
                <div className="formInput">
                    <h3 className='formName'>Sector *</h3>
                    <select
                    className='annualTurnover'
                    value={formData.sector}
                    onChange={handleChange}
                    name='sector'
                    >
              <option value='' className='dropInput'>Select Sector</option>
              {Sector.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
                    {/* <input type="text" placeholder='Sector'className='input' value={formData.sector} onChange={handleChange} name='sector'/> */}
                </div>
                <div className="formInput">
                    <h3 className='formName'>Business Type *</h3>
                    <input type="text" placeholder='Business Type'className='input' value={formData.businessType} onChange={handleChange} name='businessType' required/>
                </div>
                <div className="formInput">
                    <h3 className='formName'>Business Registration No *</h3>
                    <input type="text" placeholder='Registration No'className='input' value={formData.registrationNo} onChange={handleChange}  name='registrationNo' required/>
                </div>
                <div className="formInput">
                    <h3 className='formName'>Business Address *</h3>
                    <input type="text" placeholder='Business Address'className='input' value={formData.businessAddress} onChange={handleChange} name='businessAddress' required/>
                </div>
                <div className="formInput">
                    <h3 className='formName'>Business Website *</h3>
                    <input type="text" placeholder='Business Website'className='input' value={formData.businessWebsite} onChange={handleChange} name='businessWebsite' required/>
                </div>
                <div className="formInput">
                    <h3 className='formName'>No Of Employees *</h3>
                    <input type="text" placeholder=' Employees'className='input' value={formData.employees} onChange={handleChange} name='employees' required/>
                </div>
                <div className="formInput">
                    <h3 className='formName'>Annual Turnover *</h3>
                    <select
                    className='annualTurnover'
                    value={formData.annualTurnover}
                    onChange={handleChange}
                    name='annualTurnover'
                    >
              <option value='' className='dropInput'>Select Annual TurnOver</option>
              {TurnOver.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
                </div>
                <div className="formInput">
                    <h3 className='formName'>Country Of Location *</h3>
                    <select
                    className='annualTurnover'
                    value={formData.country}
                    onChange={handleChange}
                    name='country'
                    >
              <option value='' className='dropInput'>Country</option>
              {countries.map((option) => (
                <option key={option.isoCode} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
                    {/* <input type="text" placeholder=' Country'className='input' value={formData.country} onChange={handleChange} name='country' required/> */}
                </div>
                <div className="formInput">
                    <h3 className='formName'>City Of Location *</h3>
                    <select
              className='annualTurnover'
              value={formData.city}
              onChange={handleChange}
              name='city'
            >
              <option value='' className='dropInput'>City</option>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
                    {/* <input type="text" placeholder='City 'className='input'  value={formData.city} onChange={handleChange} name='city' required/> */}
                </div>
            </div>
        </div>

        <div className="SignUpEnterBox">
            <h3 className='boxHeader'>Main Contact(s) Info</h3>
            <div className="EnterForm">
                <div className="formInput">
                    <h3 className='formName'>Full Name *</h3>
                    <input type="text" placeholder='Full Name'className='input' value={formData.fullName} onChange={handleChange} name='fullName'  required/>
                </div>
                <div className="formInput">
                    <h3 className='formName'>Telephone *</h3>
                    <input type="number" placeholder='+123456789'className='input' value={formData.telephone} onChange={handleChange}  name='telephone' required/>
                </div>
                <div className="formInput">
                    <h3 className='formName'>E-Mail Address *</h3>
                    <input type="text" placeholder='john@gmail.com'className='input'  value={formData.emailAddress} onChange={handleChange}  name='emailAddress' required/>
                </div>
                <div className="formInput">
                    <h3 className='formName'>How did you hear of AFRIMART?</h3>
                    <select
                    className='annualTurnover'
                    value={formData.about}
                    onChange={handleChange}
                    name='about'
                    >
              <option value='' className='dropInput'>Instagram</option>
              {About.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
                </div>
                <div className='formInput'>
                {/* <label htmlFor="largeTextArea">Large Text Area:</label> */}
                <h3 className='formName'>Tell us more about your Business(optional)</h3>
                <textarea
                    id="TextArea"
                    name="description"
                    rows="10"  
                    cols="50" 
                    placeholder="Type your text here..."
                    className='TextArea-input'
                    value={formData.description} onChange={handleChange}
                />
                </div>

               
            </div>
            <button onClick={handleSubmit}>Send</button>
        </div>
       
    </div>
  )
}

export default SignUpEnter