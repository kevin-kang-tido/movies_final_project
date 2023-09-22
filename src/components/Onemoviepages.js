import React from 'react'
import '../utilities/CSS/onemoviespage.css'
import { Cardactor } from './Cards'

export default function Onemoviepages() {
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
          <img src="https://i.pinimg.com/474x/3a/5b/18/3a5b18b5c64584bf174a6809b4a43b99.jpg" alt="img_movies"/>
        </div>
      </div>
      <div className='part_infor'>
        <div className='div_info d-flex  flex-column align-items-start'>
          <h1 className='text-white'> The Aladdin <span>(2019)</span></h1>
          <div className='under_title d-flex'>
            <span>
            <i class="fa-solid fa-clapperboard text-white mx-2"></i>
            </span>
            <span className='text-white'>
            07/27/2023 (AU)
            </span>
            <span className=''>
            <a href="#">Horror</a>,&nbsp;<a href="#">Thriller </a>
            </span>
            <span className='timemovies text-white'>
              2h 35m
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
            <a href="#" className='mx-2'>
            <i class="fa-solid fa-play"></i>
              <p>Play Trailer</p>
            </a>
            </div>
          </div>

          <div className='mb-1 mt-2 key_title'>
            <p>All empires fall.</p>
          </div>

          <div className='overview d-flex  flex-column align-items-start'>
            <h3>Overview</h3>
            <p>A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.
            </p>
          </div>
        </div>
      </div>
   
    </section>
    {/* // hero seciton end */}
     {/* actor part */}
    <section className='actor_part container mb-4'>
      <h2 className='text-white mb-3'>Top Billed Cast</h2>
      <div className='row g-4'>
        <div className='col-12 col-sm-3 col-md-3 col-lg-2'>
          <Cardactor/>
        </div>
        <div className='col-12 col-sm-3 col-md-3 col-lg-2'>
          <Cardactor/>
        </div>
        <div className='col-12 col-sm-3 col-md-3 col-lg-2'>
          <Cardactor/>
        </div>
                <div className='col-12 col-sm-3 col-md-3 col-lg-2'>
          <Cardactor/>
        </div>
                <div className='col-12 col-sm-3 col-md-3 col-lg-2'>
          <Cardactor/>
        </div>
        <div className='col-12 col-sm-3 col-md-3 col-lg-2'>
          <Cardactor/>
        </div>
      </div>

    </section>
    {/* actor part */}



</>
  )
}

