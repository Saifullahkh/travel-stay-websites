import React, {useEffect} from 'react'
import { SiYourtraveldottv } from "react-icons/si";
import { FaFacebook, FaWhatsappSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='container-fluid py-4 bg-body-secondary ' id='footer'>
      <div className="row justify-content-center">
        <div data-aos='fade-up' className="col-md-2">
           <span className='text-warning'><SiYourtraveldottv /></span> <span className='fw-bolder'>Dot</span>
           <div className='d-flex gap-2 mt-3 fs-4'>
              <a href=""><span><FaFacebook style={{color: 'blue'}}/></span></a>
              <a href=""><span><AiFillTwitterCircle /></span></a>
              <a href=""><span><FaWhatsappSquare style={{color: "green"}}/></span></a>
           </div>
        </div>
        <div data-aos='fade-up' className="col-md-2">
            <h5 className='fw-bolder'>Information</h5>
            <ul className='' >
                <li>Home</li>
                <li>Explore</li>
                <li>Travel</li>
                <li>Blog</li>
            </ul>
        </div>
        <div data-aos='fade-up' className="col-md-2">
            <h5 className="fw-bolder">Helpful Links</h5>
            <ul className='' >
                <li>Destination</li>
                <li>Support</li>
                <li>Travel & Condition</li>
                <li>Privacy</li>
            </ul>
        </div>
        <div data-aos='fade-up' className="col-md-2">
            <h5 className="fw-bolder">Contact</h5>
            <p>0092335-9199919 <br />atifullahkhan47@gmail.com</p>

        </div>
      </div>
    </div>
  )
}

export default Footer
