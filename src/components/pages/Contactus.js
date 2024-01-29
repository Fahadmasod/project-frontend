import React,{useState} from 'react'

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { BsGlobe } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';

import { Link } from "react-router-dom"

import './style.css'



const Contactus = () => {
    
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    text: ''
  });

  const handleSubmit = async (e) => {
    debugger
    e.preventDefault();

    try {
      
      const response = await fetch('http://localhost:8081/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  return (
    <> 
    <section className="bg_contact_banner">
    <div className="container">
    <div className="row">
     <div className="co-lg-12 ">
                <Breadcrumb>
      <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item>Contact Us</Breadcrumb.Item>
      </Breadcrumb>
                </div>
                </div>
                </div>
    </section>

    <section className="wpo-contact-form-map section-padding">
     <div className="container">
                <div className="row">
               <div className="col-lg-10 offset-lg-1 col-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="contact-form" style={{height:"688px"}}>
                                    <h2>Get In Touch</h2>
                                    <form className="contact-validation-active" id="contact-form-main" onSubmit={handleSubmit}>
                                        <div>
                                            <input type="text" className="form-control" name="name" id="name" placeholder="First Name" value={formData.name} onChange={handleChange}/>
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" name="lastname" id="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} />
                                        </div>
                                        <div className="clearfix">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" name="phone" id="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange}  />
                                        </div>
                                        <div>
                                            <textarea className="form-control" name="text" id="text" placeholder="Description..." value={formData.text} onChange={handleChange}></textarea>
                                        </div>
                                        <div className="text-center">
                                         
                                            <button class="btns_submit">
                                              <span type="submit">Submit</span>
                                                </button>
                                          
                                        </div>
                                      
                                    </form>
                                    
                                </div>   
                                                           </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-contact-info">
                                    
                                    <div className="info-item">
                                        <div className='address' style={{marginBottom:"37px"}}>
                                                                                <div className="info-icon">
                                            <BsGlobe className='info-icon-font40'/>
                                            </div>
                                            

                                            
                                            <div className="info-text">
                                                <span>Office Address</span>
                                                
                                            </div>
                                            </div>
                                        <h2 className='indiaaddress' style={{fontSize:"23px"}}>India:
</h2>
                                        <h2 style={{fontSize:"17px"}}><b>LegalAid</b>
 <br />Shaheed nagar behind nadra complex bhopal <ln></ln>
 <div className='phonecall' style={{color:"#33648e"}}>
<b>Contact</b>:+91 +91 8269319986
 </div></h2>
 

                                        {/* <div className="info-wrap">
                                           
                                            
                                        </div> */}
                                       
                                        {/* <h2 className='indiaaddress' style={{fontSize:"23px"}}>United Kingdom:
</h2>
                                        <h2 style={{fontSize:"17px"}} ><b>VIP World services Limited</b>
 <br />Geovation - Sutton Yard 
65 Goswell Road, 4th floor EC1V 7EN
London
<div className='phonecall' style={{color:"#33648e"}}>
<b>Contact</b>: +44 20 3966 1650
 </div>
</h2> */}

                                        <div className="info-wrap">
                                           
                                            
                                        </div>
                                       
                                    </div>  
                                    
                                    <div className="info-item">
                                        <div className='emails'>
                                        <div className="info-wrap">
                                            <div className="info-icon">
                                           <TfiEmail className='info-icon-font40' />
                                            </div>
                                          
                                        </div>
                                        <h2 style={{fontSize:"17px"}}><b>legalaidservice@gmail.com</b></h2>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-lg-12">
                              
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}


export default Contactus
