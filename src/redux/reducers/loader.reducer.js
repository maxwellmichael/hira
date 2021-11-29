
const initialState = {
    isVisible: false,
    value: 0,
}


const loaderReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {

        case 'SHOW_LOADER':
            newState = { isVisible: true, value: state.value };
            return newState;

        case 'HIDE_LOADER':
            newState = { isVisible: false, value: 0 };
            return newState

        case 'SET_LOADER':
            newState = { ...state, value: action.payload.value };
            return newState;

        case 'INCREMENT_LOADER_VALUE':
            newState = { ...state, value: state.value+action.payload.value };
            return newState;

        default:
            return state;

    }
}

export default loaderReducer;