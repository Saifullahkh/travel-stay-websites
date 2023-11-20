import React from 'react'
import { FaRegAddressCard, FaLinkedinIn,FaWhatsapp  } from "react-icons/fa";
import './SocialIcon.css'



function SocialIcon() {

  return (
    <div className='block-social'>
      <ul>
        <li style={{listStyle: 'none'}}>
            <a className='text-decoration-none' href="https://www.facebook.com">
                <span>
                    <FaRegAddressCard style={{color:'red',fontSize: '23px', height: '43px', marginRight: '10px'}} />
                    {/* <span className='ps-2 social-text'>Contact us</span> */}
                </span>
            </a>
        </li>
        <li style={{listStyle: 'none'}}>
            <a className='text-decoration-none' href="https://pk.linkedin.com">
                <span>
                    <FaLinkedinIn style={{fontSize: '23px', height: '43px', marginRight: '10px'}} />
                    {/* <span className='ps-2 social-text'>Follow on Linkdin</span> */}
                </span>
            </a>
        </li>
        <li style={{listStyle: 'none'}}>
            <a className='text-decoration-none' href="https://www.whatsapp.com">
                <span>
                    <FaWhatsapp style={{color: 'green',fontSize: '23px', height: '43px', marginRight: '10px'}} />
                    {/* <span className='ps-2 social-text'>Follow on Whatsapp</span> */}
                </span>
            </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialIcon
