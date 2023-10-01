
import Carousel from '../components/Carousel'
import Cards from '../components/Cards'
import '../utilities/CSS/navbar.css'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { fetch_all_products, popular_movies } from '../redux/actions/productAction';
import LoadingView from '../components/LoadingView';
import React, { useEffect, useState } from 'react'
import { Base_http } from '../utilities/Base_http'
import ViewCard from '../components/ViewCard';

// state managements times

export default function Home() {
      
      const dispatch = useDispatch()
      const {isLoading} = useSelector(state => state.prodReducer)
      const {products}= useSelector(state => state.prodReducer)
      // const [products, setProduct]= useSelector(state => state.prodReducer)
      const {populars}= useSelector(state => state.prodReducer)
      const [pageNow, setPageNow] = useState(2)
      // const [movieSelect,  setMovieSelect] = useState([])
     
      console.log("Here is the product : ", products)
      console.log("Show the  popular   :", populars)
 
      useEffect(() => {
         dispatch(fetch_all_products())
         dispatch(popular_movies(pageNow))
      }, [])

      const handleCardClick = (card) => {
         console.log("The movies Selected : ", card)
         // setProduct(card)
       }
  return (
    <>
    <Carousel/>
      {/* manu for trending */}
      <section className='container-fluid border-bottom menu_trend mt-3'>
            <div class="d-flex flex-wrap py-3 mx-5">
                  <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none trend_css">
                  <i class="fa-solid fa-arrow-trend-up mx-2 text-white"></i>
                  <span class="fs-4 span">Trends Now</span>
                  </a>
                  <ul class="nav mx-5">
                        <li class="nav-item mx-5 li_hover">
                         <Link to="/popularmovies" class="nav-link" aria-current="page">
                           <i class="fa-solid fa-fire mx-2"></i>
                              Popular
                           </Link>
                         </li>
                        <li class="nav-item mx-5 li_hover"><Link to="/upcoming" class="nav-link">
                        <i class="fa-solid fa-star mx-2"></i>
                        Premeieres
                        </Link></li>
                        <li class="nav-item mx-5 li_hover"><Link to="/toprated" class="nav-link">
                        <i class="fa-solid fa-plus mx-2"></i>
                        Recently Added
                        </Link></li>
                 </ul>
           </div>
    </section>
     {/* carousel card start */}
    <div id="carouselExample" class="carousel slide container-fluid">
      <div class="carousel-inner">
        <div class="carousel-item active carouel_movies">
        <div className='w-90 my-5'>
          <div className='row g-4'>
            {
              products?.results?.map((product) => (
                        <div
                           className='col-12 col-md-4 col-lg-2'
                           key={product.id}
                         >
                           <Link to={`/onemovies`} className='text-decoration-none'>
                                  <ViewCard
                                  onCardClick={handleCardClick}
                                   posterIMG={`${Base_http}${product.poster_path}`}
                                   moviestitle={product.title}
                                   MovieDate={product.release_date}
                                  />
                              </Link>
                        </div>
                ))
            }

        </div>
      </div>  
    </div>
    <div class="carousel-item carouel_movies">
        <div className='w-90 my-5'>
          <div className='row g-4'>
          {
              populars?.results?.map((product) => (
                        <div
                           className='col-12 col-md-4 col-lg-2'
                           key={product.id}
                         >
                           <Link to={`/onemovies/${product.id}`} className='text-decoration-none'>
                               <Cards
                                movieIMG={`${Base_http}${product.poster_path}`}
                                moviename={product.title}
                                movieDate={product.release_date}
                               />
                           </Link>
                        </div>
                ))
            }
        </div>
      </div>  
     </div>
     <div class="carousel-item carouel_movies">
        <div className='w-90 my-5'>
          <div className='row g-4'>
          {
              products?.results?.map((product) => (
                        <div
                           className='col-12 col-md-4 col-lg-2'
                           key={product.id}
                         >
                           <Link to={`/onemovies/${product.id}`} className='text-decoration-none'>
                               <Cards
                                movieIMG={`${Base_http}${product.poster_path}`}
                                moviename={product.title}
                                movieDate={product.release_date}
                               />
                           </Link>
                        </div>
                ))
            }
        </div>
      </div>  
     </div>
  </div>      
      <button class="carousel-control-prev trending_carosel" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next trending_carosel" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    {/* carousel card end */}
    {/* start menu movies */}
    <section className='container-fluid border-bottom menu_trend movies_css mb-5'>
            <div class="d-flex flex-wrap py-3 mx-5">
                  <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none trend_css">
                  <i class="fa-solid fa-film mx-2 text-white"></i>
                  <span class="fs-4 span">Movies</span>
                  </a>
                  <ul class="nav mx-5">
                        <li class="nav-item mx-5 li_hover">
                         <a href="/popularmovies" class="nav-link" aria-current="page">
                           <i class="fa-solid fa-fire mx-2"></i>
                              Popular
                           </a>
                         </li>
                        <li class="nav-item mx-5 li_hover"><a href="/populartv" class="nav-link">
                        <i class="fa-solid fa-star mx-2"></i>
                        Premeieres
                        </a></li>
                        <li class="nav-item mx-5 li_hover"><a href="/upcoming" class="nav-link">
                        <i class="fa-solid fa-plus mx-2"></i>
                        Recently Added
                        </a></li>
                 </ul>
           </div>
    </section>
    <section className='menu_movies'>
            <div className='container'>
              <div className='row g-4'> 

                  {/* {
                        console.log(products && products)
                  } */}
                  {
                   isLoading ?
                   <>
                       <div className='col-12 col-md-4 col-lg-2'>
                          <LoadingView/>
                       </div>
                       <div className='col-12 col-md-4 col-lg-2'>
                          <LoadingView/>
                       </div>
                       <div className='col-12 col-md-4 col-lg-2'>
                          <LoadingView/>
                       </div>
                       <div className='col-12 col-md-4 col-lg-2'>
                          <LoadingView/>
                       </div>
                       <div className='col-12 col-md-4 col-lg-2'>
                          <LoadingView/>
                       </div>
                       <div className='col-12 col-md-4 col-lg-2'>
                          <LoadingView/>
                       </div>
                       <div className='col-12 col-md-4 col-lg-2'>
                          <LoadingView/>
                       </div>
                   </>
                   : populars?.results?.map((product) => (
                           <div
                              className='col-12 col-md-4 col-lg-2'
                              key={product.id}
                            >
                              <Link to={`/onemovies/${product.id}`} className='text-decoration-none'>
                                  <ViewCard
                                   posterIMG={`${Base_http}${product.poster_path}`}
                                   moviestitle={product.title}
                                   MovieDate={product.release_date}
                                  />
                              </Link>
                           </div>
                   ))
                  }
              </div>
            </div> 
      </section>
      {/* carousel_movies background start */}
      <section className='carousel_movies_background'>
         <div id="carouselExampleInterval" class="carousel slide mt-3 container mb-5" data-bs-ride="carousel">
                  <div class="carousel-inner">
                  <div class="carousel-item active slile_movies" data-bs-interval="3000">
                        <img src="https://i.pinimg.com/564x/f4/1c/53/f41c53bd61ce13a4f1937008a54dfc7a.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block caption_title">
                              <p>Duration: 2h 1m</p>
                              <p>
                              <i class="fa-solid fa-star"></i>
                              6.5 Season<span>9</span>-Episode-<span>12</span>-Still Gotta Mean Something
                              </p>
                              <h5>Shark(2015)</h5>
                              <p>Documentary series from the BBC Natural History Unit which explores the ocean's greatest predators. Narrated by actor Paul McGann, the series features...</p>
                              <div className='slide_btn'> 
                              <a href="/testsearch" className='mx-2'>
                                    <button type="button" className="btn btn_play"><i class="fa-solid fa-play"></i>WATCH</button>
                              </a>
                              <a href="/testsearch" className='mx-2'>
                                    <button type="button" className="btn btn_add"><i class="fa-solid fa-plus"></i>ADD LIST</button>
                              </a>
                        </div>
                  </div>
                  </div>
                  <div class="carousel-item slile_movies" data-bs-interval="2000">
                        <img src="https://i.pinimg.com/564x/0c/e9/de/0ce9de18eaf553dcb1213154c6002523.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block caption_title">
                              <p>Duration: 2h 1m</p>
                              <p>
                              <i class="fa-solid fa-star"></i>
                              6.5 Season<span>9</span>-Episode-<span>12</span>-Still Gotta Mean Something
                              </p>
                              <h5>Iron Man</h5>
                              <p>Iron Man and Captain America battle to keep the Red Skull and his triggerman, Taskmaster, from unleashing an army of Hydra Brutes on the...</p>
                              <div className='slide_btn'> 
                              <a href="/testsearch" className='mx-2'>
                                    <button type="button" className="btn btn_play"><i class="fa-solid fa-play"></i>WATCH</button>
                              </a>
                              <a href="/testsearch" className='mx-2'>
                                    <button type="button" className="btn btn_add"><i class="fa-solid fa-plus"></i>ADD LIST</button>
                              </a>
                        </div>
                  </div>
                  </div>
                  <div class="carousel-item slile_movies" data-bs-interval="2000">
                        <img src="https://i.pinimg.com/564x/2d/6f/3a/2d6f3ab1f574841ce51b187c3b676db1.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block caption_title">
                              <p>Duration: 2h 1m</p>
                              <p>
                              <i class="fa-solid fa-star"></i>
                              6.5 Season<span>9</span>-Episode-<span>12</span>-Still Gotta Mean Something
                              </p>
                              <h5>Civil War</h5>
                              <p>After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.</p>
                              <div className='slide_btn'> 
                              <a href="/testsearch" className='mx-2'>
                                    <button type="button" className="btn btn_play"><i class="fa-solid fa-play"></i>WATCH</button>
                              </a>
                              <a href="/testsearch" className='mx-2'>
                                    <button type="button" className="btn btn_add"><i class="fa-solid fa-plus"></i>ADD LIST</button>
                              </a>
                        </div>
                  </div>
                  </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span class="carousel-control-prev" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span class="carousel-control-next" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                  </button>
         </div>
    </section>
      {/* carousel_movies background  end*/}
      {/* card under carousel movies */}
      <section className='card_under_carousel_background'>
            <div className='container'>
              <div className='row g-4'> 
                  {
                   isLoading ?
                   <>
                       <div className='col-12 col-md-4 col-lg-2'>
                          <LoadingView/>
                       </div>
                       <div className='col-12 col-md-4 col-lg-2'>
                          <LoadingView/>
                       </div>
                       <div className='col-12 col-md-4 col-lg-2'>
                          <LoadingView/>
                       </div>
                       <div className='col-12 col-md-4 col-lg-2'>
                          <LoadingView/>
                       </div>
                       <div className='col-12 col-md-4 col-lg-2'>
                          <LoadingView/>
                       </div>
                       <div className='col-12 col-md-4 col-lg-2'>
                          <LoadingView/>
                       </div>
                       <div className='col-12 col-md-4 col-lg-2'>
                          <LoadingView/>
                       </div>
                   </>
                   : products?.results?.map((product) => (
                           <div
                              className='col-12 col-md-4 col-lg-2'
                              key={product.id}
                            >
                              <Link to={`/onemovies`} className='text-decoration-none'>
                                  <Cards
                                   movieIMG={`${Base_http}${product.poster_path}`}
                                   moviename={product.title}
                                   movieDate={product.release_date}
                                  />
                              </Link>
                           </div>
                   ))
                  }
              </div>

            </div>
      </section>
      
      {/* card under carousel movies */}

    </>

  )
}
