
import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { authReducer } from "./authReducer";
import { profileReducer } from "./profileReducer";
import { actorReducer } from "./actorReducer";

export const rootReducer = combineReducers({
    prodReducer: productReducer,
    authReducer:authReducer,
    profReducer:profileReducer,
    actReducer:actorReducer
})