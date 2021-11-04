const initialState = [];


const filterCheckBoxReducer = (state=initialState, action)=>{
    let filter = {};
    switch(action.type){
        case 'SET_FILTERS':
            return [...action.payload.filters];

        case 'ADD_FILTER':
            filter = action.payload.filter;
            return [...state, filter];

        case 'REMOVE_FILTER':
            filter = action.payload.filter;
            return [...state, filter];

        case 'REMOVE_ALL_FILTERS':
            return [];

        default:
            return [...state];
    }
}

export default filterCheckBoxReducer;