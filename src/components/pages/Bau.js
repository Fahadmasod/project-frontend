import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom"
import './style.css'

const Bau = () => {
  return (
    <>
    <section className="bg_about_banner">
    <div className="container">
    <div className="row">
     <div className="co-lg-12 ">
                <Breadcrumb>
      <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item>Change Management and Training</Breadcrumb.Item>
      </Breadcrumb>
                </div>
                </div>
                </div>
    </section>

    <section className="aboutus_padding">
     <div className="container">
                <div className="row aboutus_img_text_box">
               <div className="col-lg-5 col-12">
               <img src="./img/manage.jpg" alt="john smith" width="100%" />
               </div>
               <div className="col-lg-7 col-12">
               <div class="aboutus_box">
               {/* <span></span> <br /> */}
               <h1>Change Management and Training</h1>
    <p style={{textAlign: "justify"}}>we specialize in comprehensive Change Management and Training services to guide your organization through successful transformations. We understand that the adoption of new processes and technologies requires a strategic approach. Our seasoned experts work closely with your team to develop tailored change management strategies that mitigate resistance and ensure smooth transitions. Through engaging training programs, workshops, and resources, we empower your workforce to embrace change and optimize their skills. With a proven track record of helping businesses navigate change, SRRG Technologies is your dedicated partner in fostering a culture of continuous improvement and growth. 
</p>
               </div>
               </div>
              </div>
              </div>
               </section>
               </>
  )
}

export default Bau
