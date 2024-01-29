import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom"


const Teamstructure = () => {
  return (
    <>
        <section className="bg_teamstructure_banner">
    <div className="container">
    <div className="row">
     <div className="co-lg-12 ">
                <Breadcrumb>
      <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item>Mission of the Company</Breadcrumb.Item>
      </Breadcrumb>
                </div>
                </div>
                </div>
    </section>
    <section className="teamstructure_container">
    <div className="container">
    <div className="row">
    <div className="col-lg-12">
    <div className="teamstructure_box_wrap">
    <h2>Mission of the Company</h2>
    {/* <ul>
      <li> */}
      <b>our mission is to transform the legal landscape by pioneering an accessible, transparent, and collaborative platform
</b>

      {/* </li>
    </ul> */}
    {/* SRRG Technologies LLP was setup in 2023 by like-minded partners with 20+ years of IT &amp;
     Business experience with an objective to empower people with business and technology solutions 
     
     by providing an independent view on risk, compliance, governance areas to build intelligent enterprises.</p>
     
     <p>It is their firm belief to invest in people for their well-being, empowerment, and there by 
      build resilience by giving them the right tools &amp; applications to work.</p> */}
      </div></div></div></div></section>
    </>
  )
}

export default Teamstructure
