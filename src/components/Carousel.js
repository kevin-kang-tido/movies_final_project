import React from 'react'
import '../utilities/CSS/navbar.css'


export default function Carousel() {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://i.pinimg.com/474x/dc/fc/1c/dcfc1c47c20671f832db517b2aafe319.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block text_carousel ">
              {/* <div className=' d-flex  flex-column align-items-start'> */}
                <p>Duration: 2h 1m</p>
              <p>
                <i class="fa-solid fa-star"></i>
                6.5 Season<span>9</span>-Episode-<span>12</span>-Still Gotta Mean Something
              </p>
              {/* </div> */}
              <h5>Spider-Man</h5>
              <p>After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.</p>
              <div className='slide_btn'>
                <a href="#" className='mx-2'>
                  <button type="button" className="btn btn_play"><i class="fa-solid fa-play"></i>WATCH</button>
                </a>
                <a href="#" className='mx-2'>
                  <button type="button" className="btn btn_add"><i class="fa-solid fa-plus"></i>ADD LIST</button>
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://i.pinimg.com/474x/1d/04/67/1d0467d4d2fd1c542db2b741cfcb29bc.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <p>Duration: 2h 1m</p>
              <p>
                <i class="fa-solid fa-star"></i>
                6.5 Season<span>9</span>-Episode-<span>12</span>-Still Gotta Mean Something
              </p>
              <h5>Venom</h5>
              <p>Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.</p>
              <div className='slide_btn'>
                <a href="#" className='mx-2'>
                  <button type="button" className="btn btn_play"><i class="fa-solid fa-play"></i>WATCH</button>
                </a>
                <a href="#" className='mx-2'>
                  <button type="button" className="btn btn_add"><i class="fa-solid fa-plus"></i>ADD LIST</button>
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://i.pinimg.com/474x/3a/0d/3e/3a0d3ef23d8f77f1f41343e8015935e6.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <p>Duration: 2h 1m</p>
              <p>
                <i class="fa-solid fa-star"></i>
                6.5 Season<span>9</span>-Episode-<span>12</span>-Still Gotta Mean Something
              </p>
              <h5>Batman</h5>
              <p>As new villains overrun Gotham City of the future, the aging Bruce Wayne hangs up the cape of the once invincible Batman. But when troubled teenager Terry McGinnis stumbles upon the Dark Knight's secret...</p>
              <div className='slide_btn'>
                <a href="#" className='mx-2'>
                  <button type="button" className="btn btn_play"><i class="fa-solid fa-play"></i>WATCH</button>
                </a>
                <a href="#" className='mx-2'>
                  <button type="button" className="btn btn_add"><i class="fa-solid fa-plus"></i>ADD LIST</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
