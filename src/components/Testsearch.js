import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'
// import { all_search_movies } from '../redux/actions/productAction'
import { useDispatch } from 'react-redux'
import { fetch_all_products } from '../redux/actions/productAction'
import { fetchProducts, searchProduct } from '../utilities/Search'
import { Base_http } from '../utilities/Base_http'
import { Row } from 'react-bootstrap'

export default function Testsearch() {

    //  console.log("show to data fetch search : ", fetchSearch)
    const dispatch = useDispatch()
    // const [search, setSearch] = useSelector(state => state.prodReducer)
    // const {products} = useSelector(state  => state.prodReducer)
    const navigate = useNavigate()
    // declear state product 
    const[filterProduct,setFilterProduct]=useState([])
    const [search,setProduct] = useState([])
    // const[products,setProducts] =useState()

    const columns = [
        {
            name: 'Title Movies',
            selector: row => row.title,
            sortable:true
        },
        {
            name: 'Movies Date',
            selector: row => row.release_date,
            sortable:true
        },
        {
            name: 'Poster Movies',
            selector: row =>  
                <img src={"http://image.tmdb.org/t/p/w500"+row.poster_path} alt="movies_img" style={{width :"70px"}} />
             
        },
        {
            name: 'Action',
            selector: row =><button
             type='button'
             // navigate move to next slide ,{move with something}
             onClick={() => navigate("/onemovies",{
                state: row
             })}
              className='btn btn-danger'
            >Watch Now</button>
        }
    ];

    // useEffect(()=>{
    //     dispatch(fetch_all_products())
    // },[])

    useEffect(() =>{
        //   const fetchSearch = async() => {
        //     try{
        //         const resp = await fetch("https://api.themoviedb.org/3/search/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&query=horr")
        //         const data = await resp.json();
        //         setProduct(data);
        //     } catch(erorr){
        //         console.error('Error fetching movie data:', erorr);
        //     }
        // };
        // fetchSearch()
        // fetchProducts()
        // .then(resp => setFilterProduct(resp))
    }, [])

    useEffect(()=>{
        searchProduct(search)
        .then(resp => setFilterProduct(resp))
    },[search])

    //  useEffect(()=>{
    //     const result = filterProduct?.results?.filter(pro => {
    //         return pro.title && pro.title.toLowerCase().match(search.toLowerCase()) 
    //     }) 
    //     setFilterProduct(result) 
    // },[search])


  return (
<div className='container'>
        <DataTable
        columns={columns}
        // data={filterProduct}
        data={filterProduct?.results}
        pagination
        subHeader
        subHeaderComponent={
            <input 
            type='text'
            placeholder='search here..'
            className='form-control'
            value={search}
            onChange={(e) => {
                setProduct(e.target.value)
                console.log(search)
            }}
            />
        }
        />
    </div>
  )
}
