import React from 'react'

function Card({card,img,title,text,dot,text1,btn,grid,bgColor}) {
  return (
    <div>
      <div class={card} >
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <div className='d-flex justify-content-between justify-content-start align-items-center'>
              <p class="card-text">{text}</p>
              <p><span className='text-warning fw-bolder fs-2'>{dot}</span>{text1}</p>
            </div>
            {/* <div className={grid}>
              <button className={bgColor}>{btn}</button>
            </div> */}
            
        </div>
       </div>
    </div>
  )
}

export default Card
