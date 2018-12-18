export const DECREMENT_COUNT = 'DECREMENT_COUNT'
export const CLEAR_COUNT = 'CLEAR_COUNT'
export const CLEAR_BASKET = 'CLEAR_BASKET'

export function decrementCount(id) {
    return {
        type: DECREMENT_COUNT,
        payload: id,
    }
}

export function clearCount(id) {
    return {
        type: CLEAR_COUNT,
        payload: id,
    }
}

export function clearBasket() {
    return {
        type: CLEAR_BASKET,
    }
}