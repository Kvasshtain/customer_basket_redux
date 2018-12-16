import { combineReducers } from 'redux'

import { commonDataReducer } from "./commonData"
import { productsReducer } from "./products"

export const rootReducer = combineReducers({
    commonData: commonDataReducer,
    products: productsReducer,
})