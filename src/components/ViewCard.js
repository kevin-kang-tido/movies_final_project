import React from 'react'
import '../utilities/CSS/navbar.css'




export default function ViewCard({movieIMG, moviename, movieDate}) {
 
  return (
    <div>
        <div className="card"  >
        <img class="card-img-top rounded-bottom"
         src={movieIMG}
          alt="moveis_card"/>
        <div className="card-body">
          <div className="card-text">
            <h6>{ moviename}</h6>
          <div className='card_titile'>
            <p>{movieDate}</p>
            <div className="icon_card">
                <i className="fa-solid fa-heart mx-2"></i>
                <i className="fa-solid fa-eye mx-2"></i>
                <i className="fa-solid fa-star mx-2"> 6.6</i>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
