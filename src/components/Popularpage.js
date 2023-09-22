import React from 'react'
import Cards from './Cards'
import '../utilities/CSS/popularpage.css'


export default function Popularpage() {
  return (
    <section className=''>
      <div className='container w-100 popular_movie_full'>
       <h1 className='mb-2'>Popular Movies</h1>
        <div className='info_part mx-1'>
            <div className=''>
                <div class="accordion accordion_style" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Sort
                        </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Sort Results By
                        <div class="dropdown">
                            <button class="btn dropdown_css btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Popularity Descending
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item .bg-info" href="#">Popularity Descending</a></li>
                                <li><a class="dropdown-item" href="#"> Popularity Ascending</a></li>
                                <li><a class="dropdown-item" href="#">Rating Descending</a></li>
                                <li><a class="dropdown-item" href="#">Rating Ascending</a></li>
                                <li><a class="dropdown-item .bg-info" href="#">Release Date Descending</a></li>
                                <li><a class="dropdown-item" href="#">Release Date  Ascending</a></li>
                                <li><a class="dropdown-item" href="#">Titile(A-Z)</a></li>
                                <li><a class="dropdown-item" href="#">Titile(Z-A)</a></li>
                            </ul>
                        </div>
                        </div>
                </div>
            </div>
            </div>
{/* ...... */}
            <div class="accordion mt-3" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                     Filters
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">


                </div>
                    <div className='btn_titile border-bottom'>
                    <h6 className=''>Genres</h6>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">Action</button>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">Advanture</button>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">Animation</button>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">comedy</button>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">Documentary</button>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">Crime</button>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">Drama</button>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">Family</button>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">Science Fiction</button>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">Action</button>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">Advanture</button>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">Animation</button>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">comedy</button>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">Documentary</button>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">Crime</button>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">Drama</button>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">Family</button>
                    <button type="button" class="btn btn-outline-info text-dark border-secondary">Science Fiction</button>
                    </div>
                    <div className='btn_titile border-bottom mt-2 mb-2'>
                    <h6 className=''>Certification</h6>
                    </div>
                    <div className='btn_titile border-bottom mt-2 mb-2'>
                    <h6 className=''>Language <i class="fa-solid fa-question"></i></h6>
                    <div class="dropdown">
                            <button class="btn dropdown_css_2 btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              None Selected
                            </button>
                            <ul class="dropdown-menu dropdown_css">
                                <li><a class="dropdown-item .bg-info" href="#">United States</a></li>
                                <li><a class="dropdown-item" href="#"> United Kingdomg</a></li>
                                <li><a class="dropdown-item" href="#">Germany</a></li>
                                <li><a class="dropdown-item" href="#">France</a></li>
                                <li><a class="dropdown-item" href="#">Japan</a></li>
                                <li><a class="dropdown-item" href="#">China</a></li>
                                <li><a class="dropdown-item" href="#">Russia</a></li>
                                <li><a class="dropdown-item" href="#">India</a></li>
                                <li><a class="dropdown-item" href="#">Cambodia</a></li>
                                <li><a class="dropdown-item" href="#">Argentina</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='btn_titile border-bottom'>
                     <h6 className=''>Rating</h6>
                    <div className='container'>
                     <div class="progress mt-2" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "35%"}}></div>
                    </div>
                    <div class="progress mt-2" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "70%"}}></div>
                    </div>
                    <div class="progress mt-2" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "80%"}}></div>
                    </div>
                    <div class="progress mt-2" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "90%"}}></div>
                    </div>
                    <div class="progress mt-3 mb-3" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "100%"}}></div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <button type="button" class="btn btn-info btn_search mt-3">Search</button>

        </div>
        

        {/* part right */}
        <div className='movie_part mx-1'>
        <div className='row g-3'>
                <div className='col-12 col-md-4 col-lg-3'>
                        <Cards/>
                </div>
                <div className='col-12 col-md-4 col-lg-3'>
                        <Cards/>
                </div>
                <div className='col-12 col-md-4 col-lg-3'>
                        <Cards/>
                </div>
                <div className='col-12 col-md-4 col-lg-3'>
                        <Cards/>
                </div>
                <div className='col-12 col-md-4 col-lg-3'>
                        <Cards/>
                </div>
                <div className='col-12 col-md-4 col-lg-3'>
                        <Cards/>
                </div>
                <div className='col-12 col-md-4 col-lg-3'>
                        <Cards/>
                </div>
                <div className='col-12 col-md-4 col-lg-3'>
                        <Cards/>
                </div>
                <div className='col-12 col-md-4 col-lg-3'>
                        <Cards/>
                </div>
                <div className='col-12 col-md-4 col-lg-3'>
                        <Cards/>
                </div>
                <div className='col-12 col-md-4 col-lg-3'>
                        <Cards/>
                </div>
                <div className='col-12 col-md-4 col-lg-3'>
                        <Cards/>
                </div>
               
           </div>
        </div>
    </div>
    </section>
  )
}
