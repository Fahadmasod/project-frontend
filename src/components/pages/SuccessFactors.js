import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom"
import './style.css'

const Specialevents = () => {
  return (
    <>
    <section className="bg_about_banner">
    <div className="container">
    <div className="row">
     <div className="co-lg-12 ">
                <Breadcrumb>
      <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item>Legal Notice Services</Breadcrumb.Item>
      </Breadcrumb>
                </div>
                </div>
                </div>
    </section>

    <section className="aboutus_padding">
     <div className="container">
                <div className="row aboutus_img_text_box">
               <div className="col-lg-5 col-12">
               <img src="./img/seccessfactory.jpg" alt="john smith" width="100%" style={{height:"361px"}} />
               </div>
               <div className="col-lg-7 col-12">
               <div class="aboutus_box">
               {/* <span></span> <br /> */}
               <h1>Legal Notice Services</h1>
    <p style={{textAlign:"justify"}}>our experienced advocates offer comprehensive Legal Notice services to address your formal communication needs. Whether you are initiating legal action or responding to a notice, our dedicated legal professionals are here to guide you through the process with precision and expertise. 
 </p>
<p style={{textAlign:"justify"}}>
finding the right legal professional to handle your legal notice requirements is a critical step towards achieving clarity and precision in communication. At [Your LegalAid Website], we understand the significance of this journey, and we're here to make the search for the perfect legal professional a seamless and empowering experience
</p>
               </div>
               </div>
              </div>
              </div>
               </section>
               </>
  )
}

export default Specialevents
