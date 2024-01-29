import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom"
import './style.css'

const Specialistservices = () => {
  return (
    <>
    <section className="bg_about_banner">
    <div className="container">
    <div className="row">
     <div className="co-lg-12 ">
                <Breadcrumb>
      <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item>Diagnostic check</Breadcrumb.Item>
      </Breadcrumb>
                </div>
                </div>
                </div>
    </section>

    <section className="aboutus_padding">
     <div className="container">
                <div className="row aboutus_img_text_box">
               <div className="col-lg-5 col-12">
               <img src="./img/Diagnostic.jpeg" alt="john smith" width="100%" />
               </div>
               <div className="col-lg-7 col-12">
               <div class="aboutus_box">
               {/* <span></span> <br /> */}
               <h1>Diagnostic check</h1>
    <p style={{textAlign: "justify"}}>We partner in optimizing HR efficiency through our specialized Diagnostic Check of HR systems. With a profound understanding of the critical role HR systems play in modern organizations, we offer thorough assessments to evaluate the effectiveness of your HR technology infrastructure. Our experts conduct in-depth analyses of your existing HR systems, processes, and data flows, identifying gaps, redundancies, and opportunities for improvement. Through our diagnostic approach, we provide actionable insights and recommendations that enhance system performance, streamline operations, and elevate your overall HR strategy. Partner with us to ensure your HR systems are primed for success in an ever-evolving business landscape.
</p>
               </div>
               </div>
              </div>
              </div>
               </section>
               </>
  )
}

export default Specialistservices
