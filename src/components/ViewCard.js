import React from 'react'

export default function ViewCard(props) {
  return (
    <div>
        <div className="card">
        <img class="card-img-top rounded-bottom"
         src={props.posterIMG}
          alt="moveis_card"/>
        <div className="card-body">
          <div className="card-text">
            <h6>{props.moviestitle}</h6>
          <div className='card_titile'>
            <p>{props.MovieDate}</p>
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
