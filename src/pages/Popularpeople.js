import React, { useEffect } from 'react'
import { Cardactor } from '../components/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { all_actor_movies } from '../redux/actions/actorAction'
import LoadingView from '../components/LoadingView'
import { Link } from 'react-router-dom'

export default function Popularpeople() {
  const dispatch = useDispatch()
  const {actors} = useSelector(state => state.actReducer)
  const {isLoadingg} = useSelector(state => state.actReducer)

  console.log("show actor :", actors)

  useEffect(() =>{

    dispatch(all_actor_movies())
  },[])

  return (
    <section className='actor_part container mb-4'>
      <h2 className='text-white mb-3'>Popular People</h2>
      <div className='row g-4'>
      {
                   isLoadingg ?
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
                   </>
                   :actors?.cast?.map((product) => (
                           <div
                              className='col-12 col-sm-3 col-md-3 col-lg-2'
                              key={product.id}
                            >
                              <Link to={`/onemovies/${product.id}`} className='text-decoration-none'>
                                  <Cardactor
                                   actorIMG={`https://image.tmdb.org/t/p/w500${product.profile_path}`}
                                   actorName={product.name}
                                   actorChartacter={product.character}
                                  />
                              </Link>
                           </div>
                   ))
                  }
        
      </div>
    </section>
  )
}
