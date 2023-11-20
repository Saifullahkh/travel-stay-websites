import React, {useEffect} from 'react'
import Card from './Card'
import './Hiking.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import img6 from '../images/img6.avif'
import img7 from '../images/img7.avif'
import img8 from '../images/img8.avif'
import img10 from '../images/img10.avif'

function Hiking() {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div className='container ' id='hiking'>
      <h2 className='text-center fw-bolder my-5'>Why Hikings?</h2> 
       <div data-aos='fade-up' className="row justify-content-center">
        <div className="col-md-3 text-center card1">
            <Card 
                card={'card border-0'}
                img={img6}
                title={'110+ Mountains'}
                text={' Lorem ipsum dolor sit amet consectetur adipisicing elit. labore iure officiis!'}
            />
        </div>
        <div className="col-md-3 text-center card1">
            <Card
                card={'card border-0'} 
                img={img7}
                title={'1000+ Hikings'}
                text={' Lorem ipsum dolor sit amet consectetur adipisicing elit. labore iure officiis!'}
            />
        </div>
        <div className="col-md-3 text-center card1">
            <Card 
                card={'card border-0'}
                img={img8}
                title={'2000+ Customers'}
                text={' Lorem ipsum dolor sit amet consectetur adipisicing elit. labore iure officiis!'}
            />
        </div>
      </div>

      <div className="row" id='hiking1'>
        <div data-aos='fade-right' className="col-md-6">
            <h2 className='fw-bolder text-white mx-5 mt-5'>Wonderfull House <br /> experience nin there!</h2>
            <p className='lead text-white mx-5'>The Adventure subranking is based on an equally <br /> weighted average of scores from five country.</p>
        </div>
        <div data-aos='fade-left' className="col-lg-4 offset-1">
            <img src={img10} className='mt-5 ' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hiking
