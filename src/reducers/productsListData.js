import jsonProducts from '../data/products.json'
import {DECREMENT_COUNT, CLEAR_COUNT, CLEAR_BASKET } from '../actions/BasketListActions'
import {INCREMENT_COUNT, SET_FILTER} from '../actions/ProductsListActions'

let products = jsonProducts.map(function (product) {
    product.price = +product.price;
    product.count = +product.count;
    return product;
});

const initialState = {
    products: products,
    filter: '',
}

export function productsListDataReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_COUNT:
            return  { ...state, products: state.products.map(function(product) {
                if (product.id === action.payload) {
                    product.count++;
                }
                return product;
            })}

        case DECREMENT_COUNT:
            return { ...state, products: state.products.map(function(product) {
                if (product.id === action.payload) {
                    product.count--;
                }
                return product;
            })}

        case CLEAR_COUNT:
            return { ...state, products: state.products.map(function(product) {
                if (product.id === action.payload) {
                    product.count = 0;
                }
                return product;
            })}

        case CLEAR_BASKET:
            return { ...state, products: state.products.map(function(product) {
                product.count = 0;
                return product;
            })}

        case SET_FILTER:
            return  { ...state, filter: action.payload }

        default:
            return state
    }
}