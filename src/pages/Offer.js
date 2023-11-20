import React, {useEffect} from 'react'
import Card from './Card'
import { FaLocationDot } from "react-icons/fa6";
import img6 from '../images/img6.avif'
import img7 from '../images/img7.avif'
import img8 from '../images/img8.avif'
import Button from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Offer() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <div className="container" id='offer'>
        <div data-aos='fade-up' className="row text-center">
          <h2 className='fw-bolder'>Special Offers</h2>
          <p className='lead'>From historical cities to natural spectecular, come see the best of the world.</p>
        </div>
        <div data-aos='fade-up' className="row justify-content-center">
            <div className="col-md-3">
              <Card 
                card={'card'}
                img={img6}
                title={'$7,452'}
                text={` 450 Vine St #310,peru`}
                // btn={'View Details'}
                // grid={'d-grid'}
                // bgColor={'btn btn-warning'}
              >
              <Button />
              </Card>
            </div>
            <div className="col-md-3">
              <Card 
                card={'card'}
                img={img7}
                title={'$2,452'}
                text={` 450 Vine St #310,peru`}
                // btn={'View Details'}
                // grid={'d-grid'}
                // bgColor={'btn btn-warning'}
               
              >
               <Button />
              </Card>
            </div>
            <div className="col-md-3">
              <Card 
                card={'card'}
                img={img8}
                title={'$4,400'}
                text={` 450 Vine St #310,peru`}
                // btn={'View Details'}
                // grid={'d-grid'}
                // bgColor={'btn btn-warning'}
              >
              <Button />
              </Card>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
