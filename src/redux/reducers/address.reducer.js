const initialState = []


const addressReducer = (state = initialState, action) => {
    let newState = []
    switch (action.type) {

        case 'ADD_ADDRESS':
            return [...state, action.payload.address];

        case 'SET_ADDRESSES':
            newState = action.payload.addresses;
            return newState;

        case 'REMOVE_ADDRESS':
            newState = state.filter(address => address.id !== action.payload.id);
            return newState;

        case 'UPDATE_ADDRESS':
            newState = [...state]
            const addressIndex = newState.findIndex(address=>address.id===action.payload.id);
            newState[addressIndex] = action.payload.data;
            return newState;

        case 'CLEAR_ADDRESS':
            return [];

        default:
            return state;

    }
}

export default addressReducer;