import React, { useEffect } from 'react'
import Card from './Card'
import AOS from 'aos';
import 'aos/dist/aos.css';

import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'

function Popular() {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div>
       <div className="container mt-5" id='popular'>
            
                <h3 data-aos='fade-right' className='fw-bolder'>Popular Destination</h3>
                <p data-aos='fade-right' className='lead'>From historical cities to natural specteculors, come see best of world.</p>
            
            <div data-aos='fade-up' className="row my-5">
                <div className="col-md-3">
                    <Card
                        card={'card'}
                        img={img2}
                        title={'O1'}
                        text={'Peru'}
                        dot={"."}
                        text1={'Dot'}
                    />
                </div>
                <div className="col-md-3">
                    <Card
                        card={'card'}
                        img={img3}
                        title={'O2'}
                        text={'Mexico'}
                        dot={"."}
                        text1={'Dot'}
                    /> 
                </div>
                <div className="col-md-3">
                    <Card
                        card={'card'}
                        img={img4}
                        title={'O3'}
                        text={'Cambodia'}
                        dot={"."}
                        text1={'Dot'}
                    />
                </div>
                <div className="col-md-3">
                    <Card
                        card={'card'}
                        img={img5}
                        title={'O4'}
                        text={'India'}
                        dot={"."}
                        text1={'Dot'}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Popular
