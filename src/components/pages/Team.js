import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom"
import './style.css'

const Aboutus = () => {
  return (
    <>
    <section className="bg_about_banner">
    <div className="container">
    <div className="row">
     <div className="co-lg-12 ">
                <Breadcrumb>
      <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item>Our Team</Breadcrumb.Item>
      </Breadcrumb>
                </div>
                </div>
                </div>
    </section>

    <section className="aboutus_padding">
     <div className="container">
                <div className="row aboutus_img_text_box">
               
               <div className="col-lg-7 col-12">
               <div class="aboutus_box">
               {/* <span>John Smith</span> <br /> */}
               <h1>Our Team</h1>
               {/* <ul>
                <li> */}
                <p style={{textAlign: "justify"}}>
                Our certified SAP SuccessFactors expert team brings over 50 years of combined experience, ensuring unparalleled proficiency in delivering cutting-edge solutions. With an extensive track record of driving organizational success through optimized HR processes and technology implementations, our seasoned professionals are dedicated to elevating your workforce strategies to new heights. The team has experience to cater the HR needs of different industry types like manufacturing, consumer products, pharmaceuticals etc for the organizations present globally. 
                Partner with us to harness decades of expertise and achieve transformative results for your business.
                </p>


                {/* </li>
                <li> */}

{/* </li>
               </ul> */}
               
               </div>
               </div>
               <div className="col-lg-5 col-15">
               <img src="./img/team.jpg" alt="john smith" width="100%" style={{marginTop:"69px"}} />
               </div>
              </div>
              </div>
               </section>
               </>
  )
}

export default Aboutus
