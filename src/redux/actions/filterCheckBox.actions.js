

export const ADD_FILTER = (filter) => {
    return {
        type: "ADD_FILTER",
        payload: {
            filter: filter,
        }
    }
}

export const REMOVE_ALL_FILTERS = () => {
    return {
        type: "REMOVE_ALL_FILTERS",
    }
}

export const SET_FILTERS = (filters) => {
    return {
        type: "SET_FILTERS",
        payload: {
            filters: filters,
        }
    }
}