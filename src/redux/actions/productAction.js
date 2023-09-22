import { base_URL } from "../../utilities/constant"
import { actionTypes } from "./actionTypes"

// movies listing
export const fetch_all_products = () =>{
    return (dispatch) => {
        fetch(`${base_URL}popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=1`)
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
export const popular_movies = () =>{
    return (dispatch) => {
        fetch(`${base_URL}now_playing?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=2`)
        .then(res => res.json())
        .then(resp => dispatch({
            type: actionTypes.FETCH_POPULAR,
            payload: resp
        }))
        .catch(er => console.log(' Catch popular  error: ', er))
    }
}

export const all_tv_popular = () =>{
    return (dispatch) => {
        fetch(`${base_URL}now_playing?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=2`)
        .then(res => res.json())
        .then(resp => dispatch({
            type: actionTypes.FETCH_PTVSHOW,
            payload: resp
        }))
        .catch(er => console.log(' Catch tv show  error: ', er))
    }
}



// arrow funtion () => {......}
export const fetchAllCategories = () => {
    return (dispatch) =>{
        fetch(`${base_URL}categories`)
        .then(resp => resp.json())
        .then(resp => dispatch({
            type: actionTypes.FETCH_CATEGOIES,
            payload: resp
        }))
        .catch(er => console.log("failed to fetch:",er))
    }
}
