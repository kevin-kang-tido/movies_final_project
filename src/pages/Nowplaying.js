import React, { useEffect, useState } from 'react'
import '../utilities/CSS/popularpage.css'
import { useDispatch, useSelector } from 'react-redux'
import { popular_movies } from '../redux/actions/productAction'
import { Link } from 'react-router-dom'
import Cards from '../components/Cards'
import Infopart from '../components/Infopart'
import LoadingView from '../components/LoadingView'
import { Base_http } from '../utilities/Base_http'
import ViewCard from '../components/ViewCard'


export default function Nowplaying() {

    const dispatch = useDispatch()
    const {populars} = useSelector(state  => state.prodReducer)
    const {isLoading} = useSelector(state => state.prodReducer)
    const [movies, setMovies] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [pageNow, setPageNow] = useState(1)
  


    useEffect(() => {
        setTotalPage(populars.total_pages)
        if(pageNow === 1)
        setMovies(populars.results)
        else
        setMovies([...movies, ...populars.results])
        
        
    },[populars])

    useEffect(()=>{
        dispatch(popular_movies(pageNow))
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
       <h1 className='mb-2'>Now Playing Movies</h1>
       {/* part information */}
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
            : movies?.map((product) => (
                        <div
                            className='col-12 col-md-4 col-lg-3'
                            key={product.id}
                        >
                            <Link to={`/onemovies/${product.id}`} className='text-decoration-none'>
                                <ViewCard
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
           type="button" class="btn btn-danger w-100"
           onClick={handlechange}
           >Load More</button>
        </div>
    </div>
    </section>
  )
}
