import { combineReducers } from 'redux'
import { productsListDataReducer } from "./productsListData"

export const rootReducer = combineReducers({
    productsListData: productsListDataReducer,
})