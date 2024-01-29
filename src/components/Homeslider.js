import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom"

function Homeslider() {
  return (
    <Carousel>
      {/* <Carousel.Item> */}
        {/* <img
          className="d-block w-100"
          src="../img/b-01.jpg"
          alt="First slide"
        /> */}
        <Carousel.Caption>
          <h3>Embark on the HR Transformation Journey</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          <div className='contact_mrg_top15'><Link to="/contactus" className='btns_contact'>Contact Us</Link></div>
        </Carousel.Caption>
      {/* </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/b-02.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/b-03.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default Homeslider;