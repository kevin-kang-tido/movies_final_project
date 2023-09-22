import { base_URL } from "../../utilities/constant"
import { actionTypes } from "./actionTypes"

// all actor api
export const  all_actor_movies = () =>{
    return (dispatch) => {
        fetch(`${base_URL}603692/credits?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`)
        .then(res => res.json())
        .then(resp => dispatch({
            type: actionTypes.FETCH_ACTOR,
            payload: resp
        }))
    }
}
