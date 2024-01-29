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
      <Breadcrumb.Item>Organizational Design and Workforce Planning</Breadcrumb.Item>
      </Breadcrumb>
                </div>
                </div>
                </div>
    </section>

    <section className="aboutus_padding">
     <div className="container">
                <div className="row aboutus_img_text_box">
               <div className="col-lg-5 col-12">
               <img src="./img/work.jpg" alt="john smith" width="100%"  style={{height:"249px"}}/>
               </div>
               <div className="col-lg-7 col-12">
               <div class="aboutus_box">
               {/* <span></span> <br /> */}
               <h1>Organizational Design and Workforce Planning</h1>
    <p style={{textAlign: "justify"}}>We offer expert Organizational Design and Workforce Planning services to help your business thrive in today's dynamic landscape. Our seasoned professionals understand that a well-structured organization is essential for sustainable growth. Collaborating closely with your team, we analyze your business goals, industry trends, and talent needs to create customized organizational designs. With a focus on optimizing efficiency and fostering innovation, we develop strategic workforce plans that align with your objectives. Whether you're scaling up, adapting to change, or seeking greater agility, we would like to be your partner in crafting agile and future-ready organizational structures that drive success.
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
