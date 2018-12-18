export const SET_CURRENT_PAGE_LIST = 'SET_CURRENT_PAGE_LIST'

export function setBasketVisible(showBasket) {
    return {
        type: SET_CURRENT_PAGE_LIST,
        payload: showBasket,
    }
}