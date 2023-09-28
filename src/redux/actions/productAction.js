import { base_URL } from "../../utilities/constant"
import { actionTypes } from "./actionTypes"

// movies listing
export const fetch_all_products = (pageNow) =>{
    return (dispatch) => {
        fetch(`${base_URL}popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=${pageNow}`)
        .then(res => res.json())
        .then(resp => dispatch({
            type: actionTypes.FETCH_PRDOUCTS,
            payload: resp
        }))
        .catch(er => console.log('fetch product error: ', er))
    }
}
// api popular moveis
// api now playing
export const popular_movies = (pageNow) =>{
    return (dispatch) => {
        fetch(`${base_URL}now_playing?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=${pageNow}`)
        .then(res => res.json())
        .then(resp => dispatch({
            type: actionTypes.FETCH_POPULAR,
            payload: resp
        }))
        .catch(er => console.log(' Catch popular  error: ', er))
    }
}

// testing upcoming part
export const all_tv_popular = (pageNow) =>{
    return (dispatch) => {
        fetch(`${base_URL}popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=${pageNow}`)
        .then(res => res.json())
        .then(resp => dispatch({
            type: actionTypes.FETCH_PTVSHOW,
            payload: resp
        }))
        .catch(er => console.log(' Catch tv show  error: ', er))
    }
}

// ontv
export const all_on_tv = (pageNow) =>{
    return (dispatch) => {
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=${pageNow}`)
        .then(res => res.json())
        .then(resp => dispatch({
            type: actionTypes.FETCH_PTVSHOW,
            payload: resp
        }))
        .catch(er => console.log(' Catch tv show  error: ', er))
    }
}

// api searchiing product or movies
export const all_search_movies = () => {
    return (dispatch) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&query=horr`)
       .then(res => res.json())
        .then(resp => dispatch({
            type: actionTypes.FETCH_ALL_SEARCH,
            payload: resp
        }))
    }
}







