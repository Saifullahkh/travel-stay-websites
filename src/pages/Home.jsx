import React, { useEffect } from 'react'
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <div className='container-fluid' >
      <div className="row" id='home'>
        <div data-aos='fade-up' className="col">
            <h1 className='text-center text-white mt-5 fw-bolder'>Plan Your Trip With Travel <br /> Dot</h1>
            <p className='lead text-center text-light'>Travel to your favourite city with respectful of the <br /> environment</p>
            <div className="text-center">
               <button className="btn btn-warning">Explore Now</button>
            </div>
        </div>
      </div>

      <div className="row" id='home1'>
        <div  className='   gap-2  shadow-lg p-3 bg-white d-flex flex-row'>
            <div className='form-group' data-aos='fade-down-right'>
                <label htmlFor="" >Location</label>
                <input type="text" className='form-control' placeholder='Dream Destination' />
            </div>
            <div className='form-group' data-aos='fade-down-right'>
                <label htmlFor="" >Distance</label>
                <input type="text" className='form-control' placeholder='K/Meters' />
            </div>
            <div className='form-group' data-aos='fade-down-right'>
                <label htmlFor="" >Price Range</label>
                <input type="text" className='form-control' placeholder='$140-2000' />
            </div>
            <div className='d-flex justify-content-center align-items-end' data-aos='fade-down-right'>
                <button className="btn btn-warning">Searche</button>
            </div>
        </div>
      </div>
    </div>

   
    </>
  )
}

export default Home
