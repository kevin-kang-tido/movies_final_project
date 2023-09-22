import { actionTypes } from "../actions/actionTypes"

const initialState = {
    products: [],
    categories: [],
    populars:[],
    tvshows:[],
    isLoading: true, 
}
export const productReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        // statement product or moives listing
        case actionTypes.FETCH_PRDOUCTS: 
        return{ ...state, products: payload, isLoading: false}
        // statement popular moves
        case actionTypes.FETCH_POPULAR: 
        return{ ...state, populars: payload}
        // statement tv shwo popular moves
        case actionTypes.FETCH_PTVSHOW: 
        return{ ...state, tvshows: payload}

        case actionTypes.FETCH_CATEGOIES:
        return{...state, categories: payload}
        default:
            return state
    }
}