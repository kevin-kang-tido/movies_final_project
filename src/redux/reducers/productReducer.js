import { actionTypes } from "../actions/actionTypes"

const initialState = {
    products: [],
    categories: [],
    populars:[],
    tvshows:[],
    ontvs  :[],
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
        return{ ...state, populars: payload, isLoading: false}
        // statement tv show popular 
        case actionTypes.FETCH_PTVSHOW: 
        return{ ...state, tvshows: payload, isLoading: false}
        // statement on tv show
        case actionTypes.FETCH_ONTV: 
        return{ ...state, ontvs: payload, isLoading: false}


        default:
            return state
    }
}