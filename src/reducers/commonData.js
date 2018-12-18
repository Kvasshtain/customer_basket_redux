import { SET_CURRENT_PAGE_LIST } from '../actions/commonDataActions'

const initialState = {
    showBasket: false,
}

export function commonDataReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_PAGE_LIST:
            return { ...state, showBasket: action.payload }

        default:
            return state
    }
}