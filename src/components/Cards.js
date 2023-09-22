import React from 'react'
import '../utilities/CSS/navbar.css'

export  function Cards(props) {
  // <img class="card-img-top rounded-bottom" src="https://i.pinimg.com/474x/f2/aa/de/f2aade44c9f8b434ee4befe2913c0c68.jpg" alt="Card image cap"/>
  return (
    <>
      <div className="card">
        <img class="card-img-top rounded-bottom"
         src={props.movieIMG}
          alt="moveis_card"/>
        <div className="card-body">
          <div className="card-text">
            <h6>{props.moviename}</h6>
          <div className='card_titile'>
            <p>{props.movieDate}</p>
            <div className="icon_card">
                <i className="fa-solid fa-heart mx-2"></i>
                <i className="fa-solid fa-eye mx-2"></i>
                <i className="fa-solid fa-star mx-2"> 6.6</i>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Cards;

export function Cardactor(props){

  return(
    <div className=''>
    <div className="card">
      <img className="card-img-top" src={props.actorIMG} alt="Card_actor"/>
      <div className="card-body bg-dark">
        <h5 className="card-title text-white">{props.actorName}</h5>
        <p className="card-text">Best Character <br/> {props.actorChartacter}</p>
      </div>
    </div>
    </div>
  )
}
