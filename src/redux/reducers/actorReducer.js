import { actionTypes } from "../actions/actionTypes"

const initialState = {
    actors: [],
    isLoadingg: true, 

}
export const actorReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        // statement all actor
        case actionTypes.FETCH_ACTOR: 
        return{ ...state, actors: payload, isLoadingg:false }

        default:
            return state
    }
}