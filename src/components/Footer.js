import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BsInstagram } from 'react-icons/bs';
import { CiMobile3 } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';

import {  FaLinkedin } from 'react-icons/fa';


import { Link } from "react-router-dom"




const Footer = () => {
 const handleLinkClick = () => {
  window.scrollTo(0, document.body.scrollHeight / 2.5);// Scroll to the top of the page
};


const handleLinkClickhome=()=>{

    window.scrollTo(0, document.body.scrollHeight / 0);// Scroll to the top of the page
  

}
const handleLinkClickabout=()=>{

  window.scrollTo(0, document.body.scrollHeight / 0);// Scroll to the top of the page


}
const handleLinkClickcontact=()=>{
  window.scrollTo(0, document.body.scrollHeight / 5.0);// Scroll to the top of the page
} 
  return (
    <>
 <section className="footer_top main-footer">
 <Container>
 <Row>
        <Col xs={12} md={5}>
         <div className='footer_text_left_box footer-menu-heading-line-style_one'>
            <h5>SRRG Technologies</h5>
            {/* <p>In publishing and graphic design, Lorem ipsum is a placeholder text 
            commonly used to demonstrate the visual </p> */}
            <p>Follow Us :- </p>
        
            <a
  href="https://www.linkedin.com/company/srrg-technologies-llp/"
  target="_blank"
  rel="noopener noreferrer"
  className="social_media_icon_linkedin"
>
  <FaLinkedin style={{width:"79px",height:"36px",marginTop:"-28px"}} />
</a>
<Link to="https://www.instagram.com/legalaid247" target='_blank' alt="instagram" className='social_media_icon_instagram'>
  <BsInstagram  style={{width:"79px",height:"36px",marginTop:"-28px"}} />
</Link>           {/* 
           <Link to="https://twitter.com/login/" target='_blank' alt="twitter" className='social_media_icon_twitter'> <AiOutlineTwitter /></Link>
           <Link to="https://www.youtube.com/" target='_blank' alt="youtube" className='social_media_icon_youtube'> <SiYoutube /></Link>
            */}
          
         </div>
        </Col>
        <Col xs={12} md={3}>
        <div className='footer_menu_wrap footer-menu-heading-line-style'>
            <h5>Quick Links</h5>
            <ul className='footer_menu_link'>
                <li><Link to="/" onClick={handleLinkClickhome} className='footer-menu-link'>Home</Link></li>
                <li><Link to="/aboutus" onClick={handleLinkClickabout} className='footer-menu-link'>About Us</Link></li>
                <li><Link to="/" onClick={handleLinkClick} className='footer-menu-link'> Services</Link></li>
                {/* <li><Link to="/teamstructure" className='footer-menu-link'>Team Structure</Link></li> */}
                <li><Link to="/contactus"
                onClick={handleLinkClickcontact}
                className='footer-menu-link'>Contact Us</Link></li>
            </ul>

            </div>
        </Col>
        <Col xs={12} md={4}>
        <div className='footer_address_wrap footer-menu-heading-line-style'>
            <h5>Get In Touch</h5>

            <ul class="footer_address">
  <li><Link to="/"> <span class="footer_address_icon"> <CiMobile3 /> </span> <span>+91 8269319986</span></Link></li>
<li><Link to="/"><span class="footer_address_icon"><AiOutlineMail /></span><span>legalaidservice@gmail.com</span></Link> </li>
<li><Link to="/">  <span class="footer_address_icon"></span> <span>
</span></Link> </li>

            </ul>
            </div>
           
        </Col>
        </Row>
 </Container>

 <Container className="footer_bottom">
 <Row>
        <Col xs={12} md={6} className='tc_mobile'>
       <span className='text_blue_color'> © SRRG Technologies. All Rights Reserved.</span>
        </Col>
        <Col xs={12} md={6} className='txt_right'>
        {/* <Link to="/" target="_blank" className='text_blue_color'>Privacy & Policy</Link> |  */}
         {/* <Link to="/" target="_blank" className='text_blue_color'>Disclaimer</Link> |  */}
         {/* <Link to="/" target="_blank" className='text_blue_color'>Sitemap</Link> */}
        </Col>
        </Row>
        </Container>

 </section>


    </>
  )
}

export default Footer
