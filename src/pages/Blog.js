import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img11 from '../images/img11.avif'
import img12 from '../images/img12.avif'
import img13 from '../images/img13.avif'
import img14 from '../images/img14.avif'

function Blog() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='container mt-5' id='blog'>
      <h2 data-aos='fade-up' className='fw-bolder text-center'>Our best blog?</h2>
      <p data-aos='fade-up' className='lead text-center'>An insight to the incredible experience in the world.</p>
      
      <div className="row justify-content-center my-3">
        <div data-aos='fade-up' className="col-md-5">
          <div class="card mb-3 border-0">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={img11} class="img-fluid rounded-start mt-4" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Beautiful Morocco, let us travel</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button class="btn text-warning">Read More </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' className="col-md-5">
          <div class="card mb-3 border-0">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={img12} class="img-fluid rounded-start mt-4" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Romantic moments under Eiffel Tower</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button class="btn text-warning">Read More </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' className="col-md-5">
         <div class="card mb-3 border-0">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={img13} class="img-fluid rounded-start mt-4" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Let us have an adventure outside Tunisia</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button class="btn text-warning">Read More </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' className="col-md-5">
          <div class="card mb-3 border-0">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={img14} class="img-fluid rounded-start mt-4" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Best country in East Africa</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This content is a little bit longer.</p>
                  <button class="btn text-warning">Read More </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
