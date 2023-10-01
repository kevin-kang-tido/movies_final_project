import React, { useEffect, useState } from 'react'
import '../utilities/CSS/onemoviespage.css'
import { Base_http } from '../utilities/Base_http';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import Trailer from './Trailer';
import { base_URL } from '../utilities/constant';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_all_products } from '../redux/actions/productAction';
import Cards from './Cards';


export default function Onemoviespages() {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.prodReducer)
  const [movieCard, setMoviesCard] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const [pageNow, setPageNow] = useState(16)
  const location = useLocation()

  const [selectedMovie, setSelectedMovie] = useState(
    {
      adult
        :
        false,
      backdrop_path
        :
        "/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg",
      genre_ids
        :
        [878, 28, 12],
      id
        :
        580489,
      original_language
        :
        "en",
      original_title
        :
        "$Venom: Let There Be Carnage",
      overview
        :
        "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own..",
      popularity
        :
        96.035,
      poster_path
        :
        "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
      release_date
        :
        "2021-09-30",
      title
        :
        "Venom (2019)",
      video
        :
        false,
      vote_average
        :
        6.8
    }
  )

  useEffect(() => {
    setTotalPage(products.total_pages)
    if (pageNow === 16)
      setMoviesCard(products.results)
    else
      setMoviesCard([...movieCard, ...products.results])

  }, [products])

  useEffect(() => {
    dispatch(fetch_all_products(pageNow))
  }, [pageNow])

  const handlechange = () => {
    if (pageNow <= totalPage)
      setPageNow(pageNow + 1)
    else {
      setPageNow(1)
    }
  }

  const oneMovieData = {

    title: 'Default Title',
    release_date: 'Unknown',
    runtime: 0,
    overview: 'Overview Null',
    vote_average: 0,
    poster_path: ''
    // poster_path: '/kMI3tgxLAZbzGOVlorUBva0kriS.jpg',
    // poster_path: [
    //   "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
    // ]

  }
  const [movies, setMovies] = useState(oneMovieData);
  const [open, setOpen] = useState(false);
  const [rated, setRated] = useState(null);

  const { id } = useParams()

  const handleCardClick = (card) => {
    // console.log("The movies Info in card : ", card)
    setSelectedMovie(card)
  }
  

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect((id) => {
    // Fetch the movies data
    const fetchMovie = async () => {
      const resp = await fetch(`${base_URL}${id}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`);
      const data = await resp.json();
      setMovies(data);
    };
    fetchMovie(id);
  }, []);


  // getting the movie from the id in url 
  const fetchMovie = async () => {
    const resp = await fetch(`${base_URL}${id}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`);
    const data = await resp.json();
    return data
  };

  useEffect(() => {
    fetchMovie(id).then((data) => {
      setSelectedMovie(data)
    })
  }, [id])


  // console.log('Show me the movies valuses of movies', movies);
  // search 
  const {search} = useState([])
  // useEffect(() => {
  //    if(selectedMovie == search){
  //       const {id, title, overview, poster_path, release_date} = location.state
  //         selectedMovie.id = id
  //         selectedMovie.title = title
  //         selectedMovie.title = title
  //         selectedMovie.overview = overview
  //         selectedMovie.release_date = release_date
  //         selectedMovie.poster_path= poster_path
  //    }
  // },[])

  return (
    <>
      {/* // start menu */}
      <section className='container'>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDarkDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown mx-2">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Overview
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Main</a></li>
                    <li><a class="dropdown-item" href="#">Alterantive Title</a></li>
                    <li><a class="dropdown-item" href="#">Cast & Crew</a></li>
                    <li><a class="dropdown-item" href="#">Episode Group</a></li>
                    <li><a class="dropdown-item" href="#">Seasons</a></li>
                    <li><a class="dropdown-item" href="#">Translations</a></li>
                    <li><a class="dropdown-item mt-2" href="#">Change</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown mx-2">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Share
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Main</a></li>
                    <li><a class="dropdown-item" href="#">Alterantive Title</a></li>
                    <li><a class="dropdown-item" href="#">Cast & Crew</a></li>
                    <li><a class="dropdown-item" href="#">Episode Group</a></li>
                    <li><a class="dropdown-item" href="#">Seasons</a></li>
                    <li><a class="dropdown-item" href="#">Translations</a></li>
                    <li><a class="dropdown-item mt-2" href="#">Change</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown mx-2">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Media
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Main</a></li>
                    <li><a class="dropdown-item" href="#">Alterantive Title</a></li>
                    <li><a class="dropdown-item" href="#">Cast & Crew</a></li>
                    <li><a class="dropdown-item" href="#">Episode Group</a></li>
                    <li><a class="dropdown-item" href="#">Seasons</a></li>
                    <li><a class="dropdown-item" href="#">Translations</a></li>
                    <li><a class="dropdown-item mt-2" href="#">Change</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown mx-2">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Fandom
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Main</a></li>
                    <li><a class="dropdown-item" href="#">Alterantive Title</a></li>
                    <li><a class="dropdown-item" href="#">Cast & Crew</a></li>
                    <li><a class="dropdown-item" href="#">Episode Group</a></li>
                    <li><a class="dropdown-item" href="#">Seasons</a></li>
                    <li><a class="dropdown-item" href="#">Translations</a></li>
                    <li><a class="dropdown-item mt-2" href="#">Change</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      {/*  // end menu */}

      {/* // hero seciton start */}
      <section className='mt-2 mb-2'>
        <div className='part_card'>
          <div className='div_img'>
            <img src={`http://image.tmdb.org/t/p/w500${selectedMovie?.poster_path}`} alt="img_movies" />
          </div>
        </div>
        <div className='part_infor'>
          <div className='div_info d-flex  flex-column align-items-start'>
            <h1 className='text-white'> {selectedMovie?.title}</h1>
            <div className='under_title d-flex'>
              <span>
                <i class="fa-solid fa-clapperboard text-white mx-2"></i>
              </span>
              <span className='text-white'>
                ${selectedMovie?.release_date}
                 (AU)
              </span>
              <span className=''>
                <a href="#">Horror</a>,&nbsp;<a href="#">Thriller </a>
              </span>
              <span className='timemovies text-white'>
                ${selectedMovie?.runtime}
              </span>
            </div>

            <div className='icon_part mt-3 mb-3'>
              <div className='iconn mx-2'>
                <i class="fa-solid fa-bookmark"></i>
              </div>
              <div className='iconn mx-2'>
                <i class="fa-solid fa-heart"></i>
              </div>
              <div className='iconn mx-2'>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className='iconn mx-2'>
                <i class="fa-solid fa-list"></i>
              </div>
              <div className='iconn_play mx-2'>
                <NavLink to="/trailer" className='mx-2'>
                  <Trailer />
                </NavLink>
              </div>
            </div>

            <div className='mb-1 mt-2 key_title'>
              <p>{selectedMovie?.original_title}</p>
            </div>
            <div className='overview d-flex flex-column align-items-start'>
              <h3>Overview</h3>
              <p className=''>{selectedMovie?.overview}</p>
            </div>
          </div>
        </div>

      </section>
      {/* // hero seciton end */}
      {/* actor part */}
      <section className='actor_part container mb-4'>
        <h2 className='text-white mb-3'>Top Movies 2023</h2>
        <div className='row g-4'>
          {
            movieCard?.map((product) => (
              <div
                className='col-12 col-sm-3 col-md-3 col-lg-2'
                key={product.id}
              >
                  <div  >
                    <Cards
                      onCardClick={handleCardClick}
                      movieIMG={`${Base_http}${product.poster_path}`}
                      moviename={product.title}
                      movieDate={product.release_date}
                      movie={product}
                    />
                  </div>
              </div>
            ))
          }
          <button
            type="button" class="btn btn-danger w-100"
            onClick={handlechange}

          >Load More</button>
        </div>

      </section>
      {/* actor part */}



    </>
  )
}

