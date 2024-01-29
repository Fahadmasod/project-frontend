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
      <Breadcrumb.Item>Our Company</Breadcrumb.Item>
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
               <h1> Our Company</h1>
              <p style={{textAlign: "justify"}}>LegalAid Hub stands as a versatile and inclusive online destination, committed to simplifying and expanding access to a broad spectrum of legal services. Our platform unifies a diverse array of legal offerings, covering everything from consultations and document reviews to contract drafting and expert representation. LegalAid Hub serves as a centralized resource, connecting users with a network of experienced legal professionals proficient in various domains. Users can easily navigate through profiles, evaluate advocate expertise, and seamlessly schedule virtual consultations. Our commitment to accessibility extends to a user-friendly interface that facilitates straightforward interactions and transparent transactions. Whether users seek legal advice, document assistance, or representation
               </p>
               </div>
               </div>
               <div className="col-lg-5 col-15">
               <img src="./img/b-7.jpg" alt="john smith" width="100%" style={{marginTop:"71px"}} />
               </div>
              </div>
              </div>
               </section>
               </>
  )
}

export default Aboutus
