import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { all_search_movies } from '../redux/actions/productAction'

export default function Searchbar() {
    
    const dispatch = useDispatch()
    const [search, setSearch] = useSelector(state => state.prodReducer)
    const[filterProduct,setFilterProduct]=useState([])
    // const [search,setSearch] = useState([])

    console.log("Show me the value of movies : ", search)

    useEffect(() =>{
         dispatch(all_search_movies())
        .then(resp => setFilterProduct(resp))
    }, [])

    useEffect(()=>{
        const result = filterProduct.filter(pro => {
            return pro.title && pro.title.toLowerCase().match(search.toLowerCase())
        }) 
        setFilterProduct(result) 
    },[search])


  return (

    <div className='container bg-dark h-5'>
        <div class="input-group justify-content-center">
            <div class="form-outline h-50 w-50">
                <input type="search" id="form1" 
                class="form-control" placeholder='search here...' 
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value)
                    console.log("Show me the search valuse: ",search)
                }}
                />
            </div>
            <button type="button" class="btn btn-danger h-5 bg-danger">
                <i class="fas fa-search"></i>
            </button>
        </div>
     </div> 
  
  )
}
