import React, { useEffect, useState } from 'react'
import '../utilities/CSS/popularpage.css'
import { useDispatch, useSelector } from 'react-redux'
import { all_tv_popular } from '../redux/actions/productAction'
import { Link } from 'react-router-dom'
import Cards from '../components/Cards'
import LoadingView from '../components/LoadingView'
import { Base_http } from '../utilities/Base_http'
import Infopart from '../components/Infopart'


export default function Ontv() {

    const dispatch = useDispatch()
    const {ontvs} = useSelector(state  => state.prodReducer)   
    const {isLoading} = useSelector(state => state.prodReducer)
    const [movies, setMovies] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [pageNow, setPageNow] = useState(1)

    console.log("Show Ontv valuse : ", ontvs)
  


    useEffect(() => {
        setTotalPage(ontvs.total_pages)
        if(pageNow === 1)
        setMovies(ontvs.results)
        else
        setMovies([...movies, ...ontvs.results])
        
        
    },[ontvs])

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
       <h1 className='mb-2'>On Tv Movies</h1>   
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
            : movies?.map((product) => (
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
           type="button" class="btn btn-danger w-100"
           onClick={handlechange}

           >Load More</button>
        </div>
    </div>
    </section>
  )
}
