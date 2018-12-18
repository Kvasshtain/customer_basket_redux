export const INCREMENT_COUNT = 'INCREMENT_COUNT'
export const SET_FILTER = 'SET_FILTER'

export function incrementCount(id) {
    return {
        type: INCREMENT_COUNT,
        payload: id,
    }
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        payload: filter,
    }
}