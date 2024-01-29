import React from 'react'
import { Link } from "react-router-dom"
const Services = () => {
  return (
    <>
     <section className='services_container'>
       <div className='container'>
         <div className='row'>
            <div className='col-lg-12'><h2>Our Services</h2></div>

            {/*  */}
            <div className='col-lg-4 col-md-6 col-12' >
              <div className='services_box_one acp_code'>
              <h3>Legal Notice Services</h3>
<img src="./img/seccessfactory.jpg" alt="john smith" width="100%" style={{height:"207px"}} />
<div class="services_btn_wrap">
  {/* <button type="button" className='services_btn'>Read More</button> */}
  <Link to="/SuccessFactors" className='btns_contact'> Read More</Link>
  </div></div>
            </div>
            <div className='col-lg-4 col-md-6 col-12'style={{marginTop:"2px"}} >
              <div className='services_box_one acp_code'>
              <h3>Your Trusted Partner in Marriage and Divorce Matters.    </h3>
<img src="./img/techno.jpg" alt="john smith" width="100%" style={{height:"207px",marginTop:"1px"}} />
<div class="services_btn_wrap">
  {/* <button type="button" className='services_btn'>Read More</button> */}
  <Link to="/implementation" className='btns_contact'> Read More</Link>
  </div></div>
            </div>
            





            <div className='col-lg-4 col-md-6 col-12' >
              <div className='services_box_one acp_code'>
              <h3>Consumers Complaint
</h3>
<img src="./img/roadmap.jpg" alt="john smith" width="100%" style={{height:"207px",marginTop:"27px"}} />
<div class="services_btn_wrap">
  {/* <button type="button" className='services_btn'>Read More</button> */}
  <Link to="/duediligence" className='btns_contact'> Read More</Link>
  </div></div>
            </div>



            
            <div className='col-lg-4 col-md-6 col-12' style={{marginTop:"50px"}} >
              <div className='services_box_one acp_code'>
              <h3>Education Related Legal Services
</h3>
<img src="./img/manage.jpg" alt="john smith" width="100%" style={{height:"204px",marginTop:"54px"}} />
<div class="services_btn_wrap">
  {/* <button type="button" className='services_btn'>Read More</button> */}
  <Link to="/bau" className='btns_contact'> Read More</Link>
  </div></div>
            </div>

            <div className='col-lg-4 col-md-6 col-12' style={{marginTop:"53px"}} >
              <div className='services_box_one acp_code'>
              <h3>Health Related Legal Services</h3>
<img src="./img/work.jpg"  alt="john smith" width="100%" style={{height:"204px",marginTop:"25px"}} />
<div class="services_btn_wrap">
  {/* <button type="button" className='services_btn'>Read More</button> */}
  <Link to="/specialist-services" className='btns_contact'> Read More</Link>
  </div></div>
            </div>

            <div className='col-lg-4 col-md-6 col-12' style={{marginTop:"53px"}} >
              <div className='services_box_one acp_code'>
              <h3>Bank Related Services</h3>
<img src="./img/employee.jpg"  alt="john smith" width="100%" style={{height:"212px",marginTop:"21px"}} />
<div class="services_btn_wrap">
  {/* <button type="button" className='services_btn'>Read More</button> */}
  <Link to="/special-events" className='btns_contact'> Read More</Link>
  </div></div>
            </div>
            <div className='col-lg-4 col-md-6 col-12' style={{marginTop:"53px",}} >
              <div className='services_box_one acp_code'>
              <h3>document/Affidavit</h3>
<img src="./img/Diagnostic.jpeg"  alt="john smith" width="100%" style={{height:"212px",marginTop:"21px"}} />
<div class="services_btn_wrap">
  {/* <button type="button" className='services_btn'>Read More</button> */}
  <Link to="/digno_stick" className='btns_contact'> Read More</Link>
  </div></div>
            </div>

           
</div>
</div>
        

      
        {/* <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>  */}
    </section>



    </>
  )
}

export default Services
