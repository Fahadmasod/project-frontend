import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"
import SVGComponent from './pages/svgfolder';
// import { FaFacebookSquare } from 'react-icons/fa';
// import { BsInstagram } from 'react-icons/bs';
// import { AiOutlineTwitter } from 'react-icons/ai';
// import { SiYoutube } from 'react-icons/si';

function Header() {
  return (
    <>  
    <Navbar bg="light" expand="lg" className="sticky_nav_position">
    <Container>
      <Navbar.Brand><Link to="/" className='cool-link_logo'><SVGComponent/></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className='flex-row-reverse'>
        <Nav
          className="stroke nav-content"
          // style={{ maxHeight: '225px'}}
          navbarScroll
        >
       
          <Nav.Link><Link className='cool-link btns_contact w-100' to="/">Home</Link></Nav.Link>
          <NavDropdown title="About Us" id="navbarScrollingDropdown" className='cool-link btns_contact'>
          <NavDropdown.Item><Link to="/aboutus" className='cool-link'>Our Company</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/teamstructure" className='cool-link' >Our Mission</Link></NavDropdown.Item>
            <NavDropdown.Item> <Link to="/Visioncmpny"  className='cool-link'>Our Vision</Link> </NavDropdown.Item>
         <NavDropdown.Item> <Link to="/Founder" className='cool-link'>Our Founder</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/Team" className='cool-link'>Our Team</Link></NavDropdown.Item>
            {/* <NavDropdown.Item><Link to="/special-events" className='cool-link'>Employee Engagement and Well-being</Link></NavDropdown.Item> */}
            {/* <NavDropdown.Item><Link to="/digno_stick" className='cool-link'>Diagnostic check</Link></NavDropdown.Item> */}
          </NavDropdown>
          {/* <Nav.Link><Link to="/aboutus" className='cool-link'>About Us</Link></Nav.Link> */}
          {/* <Nav.Link><Link to="/teamstructure" className='cool-link'>Mission of the Company</Link></Nav.Link> */}
          {/* <Nav.Link><Link to="/Visioncmpny" className='cool-link'> Vision of the Company</Link></Nav.Link> */}
          <NavDropdown title="Advocate" id="navbarScrollingDropdown" className='cool-link btns_contact' ></NavDropdown>
          <NavDropdown title="Services" id="navbarScrollingDropdown" className='cool-link btns_contact' >
          <NavDropdown.Item><Link to="/SuccessFactors" className='cool-link'> Legal Notice</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/duediligence" className='cool-link'>Divorce/Marriage</Link></NavDropdown.Item>
            <NavDropdown.Item> <Link to="/implementation" className='cool-link'>Consumer Complaint</Link> </NavDropdown.Item>
         <NavDropdown.Item> <Link to="/bau" className='cool-link'> Education Related  Services</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/specialist-services" className='cool-link'> Health Related  Services</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/special-events" className='cool-link'>Bank Related  Services</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/digno_stick" className='cool-link'>document/Affidavit Services</Link></NavDropdown.Item>
          </NavDropdown>
          <Link to="/contactus" className='cool-link btns_contact'>Contact Us</Link>
           </Nav>
        
        
      </Navbar.Collapse>
    </Container>
  </Navbar>

   
  {/* <div class="sticky-icon">
   <Link to="https://www.instagram.com/?hl=en" class="Instagram" target="_blank"><BsInstagram className="fab fa-instagram icon_font18" /> &nbsp; Instagram </Link>
   <Link to="https://www.facebook.com/" class="Facebook" target="_blank"><FaFacebookSquare class="fab fa-facebook-f icon_font18" /> &nbsp; Facebook </Link>
   
   <Link to="https://www.youtube.com/" class="Youtube" target="_blank"><SiYoutube class="fab fa-youtube icon_font18" />&nbsp; Youtube </Link>
   <Link to="https://twitter.com/login" class="Twitter" target="_blank"><AiOutlineTwitter class="fab fa-twitter icon_font18" /> &nbsp; Twitter </Link>  
</div> */}

 

</>
  );
}

export default Header;