const initialState = []


const addressReducer = (state=initialState, action)=>{
    let newState = {}
    switch(action.type){

        case 'ADD_ADDRESS':
            newState = action.payload.address;
            return [...state, newState];
            
        case 'CLEAR_ADDRESS':
            return [];
        default:
            return state;

    }
}

export default addressReducer;