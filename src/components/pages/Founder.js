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
      <Breadcrumb.Item>Our Founder</Breadcrumb.Item>
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
               <h1>Our Founder</h1>
             
               <p style={{textAlign: "justify"}}>I am <b>Subhana Maroof,</b> an engineering student with a vision to redefine the landscape of legal aid. Growing up with my father, who is a dedicated advocate, I witnessed firsthand the challenges individuals face in accessing legal support. It became evident that there was a gap that needed to be bridged, and this realization fueled the inception of our platform. Driven by a passion for innovation and a commitment to justice, I embarked on a journey to create a space that empowers both legal professionals and those seeking legal assistance. Inspired by my father's dedication to his practice, the idea of [Your LegalAid Website] took shape. It is more than just a platform; it's a testament to the belief that justice should be accessible to all. As an engineering student, I bring a fresh perspective to the legal realm, infusing technology with the principles of transparency, collaboration, and efficiency. LegalAid is the result of countless hours of brainstorming, collaboration with legal experts, and a commitment to ensuring that individuals and businesses can navigate the legal landscape with ease.</p>
               


               
               </div>
               </div>
               <div className="col-lg-5 col-15">
                <div className='founder' style={{width:"262px",height:"328px",border: "2px solid black",marginLeft:"91px",marginTop:"70px"}}> 
                <img src="./img/profile.jpeg" alt="john smith" width="100%" /></div>
              

               </div>
              </div>
              </div>
               </section>
               </>
  )
}

export default Aboutus
