import React from 'react'
//  import { ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
const Welcome = () => {
  const handleLinkClickabout=()=>{

    window.scrollTo(0, document.body.scrollHeight / 0);// Scroll to the top of the page
  
  
  }
  return (
    <section className='welcome_container'>
<div className='container'>
    <div className='row'>
    <div class="col-lg-6">
      
      <img src="./img/b-1.jpg" alt="hr cloud solution" class="welcome_img_width"/>
    </div>
        <div className='col-lg-6'>
           <div className='welcome_box'>
           <span>Welcome To</span> <br />

           <h1>SLegalAid</h1>
            <p style={{textAlign: "justify"}}>At LegalAid, we believe in a world where justice is accessible to all. Whether you are seeking legal assistance or are a dedicated advocate, our platform is designed to be a beacon of support, innovation, and collaboration.
</p>
<p>Join us in redefining the way legal support is accessed and delivered. Whether you are an advocate looking to make a difference or an individual seeking trustworthy legal guidance,LegalAid is your partner on the journey to justice.</p>

<Link to="/aboutus">
        <button onClick={handleLinkClickabout} className='btns_success'>Read More</button>
      </Link>
  
           </div>
            </div>
    </div>
</div>

<div className='welcome_left_img vert-move'>
<img src="./img/shap_left.png" alt="hr cloud solution" className='welcome_shape_left_img'/>
</div>
<div className='welcome_right_img'>
<img src="./img/shap_right.png" alt="hr cloud solution" className='welcome_shape_right_img'/>
    </div>

    </section>
  )
}

export default Welcome