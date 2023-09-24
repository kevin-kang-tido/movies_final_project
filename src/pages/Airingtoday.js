import React, { useEffect, useState } from 'react'
import '../utilities/CSS/popularpage.css'
import { useDispatch, useSelector } from 'react-redux'
import { all_tv_popular } from '../redux/actions/productAction'
import { Link } from 'react-router-dom'
import Cards from '../components/Cards'
import { Base_http } from '../utilities/Base_http'
import Infopart from '../components/Infopart'
import LoadingView from '../components/LoadingView'


export default function Airingtoday() {

    const dispatch = useDispatch()
    const {tvshows} = useSelector(state  => state.prodReducer)
    const {isLoading} = useSelector(state => state.prodReducer)
    const [movies, setMovies] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [pageNow, setPageNow] = useState(14)
  


    useEffect(() => {
        setTotalPage(tvshows.total_pages)
        if(pageNow === 14)
        setMovies(tvshows.results)
        else
        setMovies([...movies, ...tvshows.results])
        
        
    },[tvshows])

    useEffect(()=>{
        dispatch(all_tv_popular(pageNow))
    },[pageNow])

    
   
   const handlechange = () =>{
    if(pageNow <= totalPage)
    setPageNow(pageNow + 1)
    else{
        setPageNow(1)
    }
    }

  return (
    <section className=''>
      <div className='container w-100 popular_movie_full'>
       <h1 className='mb-2'>TV Shows Airing Today</h1>
       {/* information part */}
       <Infopart/>

        

        {/* part right */}
        <div className='movie_part mx-1'>
        <div className='row g-3'>
            {     
                isLoading ?
                <>
                <div className='col-12 col-md-4 col-lg-3'>
                    <LoadingView/>
                </div>
                <div className='col-12 col-md-4 col-lg-3'>
                    <LoadingView/>
                </div>
                <div className='col-12 col-md-4 col-lg-3'>
                    <LoadingView/>
                </div>
                <div className='col-12 col-md-4 col-lg-3'>
                    <LoadingView/>
                </div>
                </>   

            :movies?.map((product) => (
                        <div
                            className='col-12 col-md-4 col-lg-3'
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
           <button
            type="button" 
            class="btn btn-danger w-100"
            onClick={handlechange}
            >Load More</button>
        </div>
    </div>
    </section>
  )
}
