import { combineReducers } from 'redux'

import { commonDataReducer } from "./commonData"
import { productsListDataReducer } from "./productsListData"

export const rootReducer = combineReducers({
    commonData: commonDataReducer,
    productsListData: productsListDataReducer,
})