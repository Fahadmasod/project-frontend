import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom"
import './style.css'

const Duediligence = () => {
  return (
    <>
    <section className="bg_about_banner">
    <div className="container">
    <div className="row">
     <div className="co-lg-12 ">
                <Breadcrumb>
      <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item>HR Strategy and Roadmapping</Breadcrumb.Item>
      </Breadcrumb>
                </div>
                </div>
                </div>
    </section>

    <section className="aboutus_padding">
     <div className="container">
                <div className="row aboutus_img_text_box">
               <div className="col-lg-5 col-12">
               <img src="./img/roadmap.jpg" alt="john smith" width="100%" style={{borderRadius:'15px',height:"298px"}}/>
               </div>
               <div className="col-lg-7 col-12">
               <div class="aboutus_box">
               {/* <span></span> <br /> */}
               <h1>Your Trusted Partner in Marriage and Divorce Matters.</h1>
    <p style={{textAlign: "justify"}}>

    finding the right legal professional to handle your legal notice requirements is a critical step towards achieving clarity and precision in communication. At [Your LegalAid Website], we understand the significance of this journey, and we're here to make the search for the perfect legal professional a seamless and empowering experience
    </p>
    <p>Marriage: A Legal Commitment Marriage is not only a personal commitment but also a legal contract. Here are key legal aspects to consider: Marriage License: Before tying the knot, couples typically obtain a marriage license from the relevant authorities. This legal document legitimizes the union. Prenuptial Agreements: Couples may choose to sign a prenuptial agreement before marriage to outline how assets, debts, and other matters will be handled in the event of a divorce. Legal Rights and Responsibilities: Marriage comes with legal rights and responsibilities, including financial obligations, inheritance rights, and the right to make medical decisions for a spouse. Divorce: Dissolving the Legal Union When a marriage ends, navigating the legal process of divorce is essential. Key considerations include: Grounds for Divorce: Grounds for divorce vary, and it's essential to understand the legal reasons recognized in your jurisdiction, whether they are fault-based or no-fault. Division of Assets and Debts: Legal proceedings determine how assets and debts acquired during the marriage are divided between spouses. Child Custody and Support: If children are involved, legal decisions about custody, visitation, and child support must be made. Spousal Support: In some cases, spousal support or alimony may be awarded, and the legal parameters for such arrangements vary. Finding an Advocate: Expertise in Marriage and Divorce Matters When facing legal matters related to marriage or divorce, having a skilled advocate by your side is invaluable. Here's how you can find an expert</p>
               </div>
               </div>
              </div>
              </div>
               </section>
               </>
  )
}

export default Duediligence

