
const initialState = {
    isVisible: false,
    type: null
}


const modalReducer = (state=initialState, action)=>{
    let newState = {}
    switch(action.type){

        case 'SHOW_MODAL':
            newState = {isVisible: true, type:action.payload.type, data:action.payload.data};
            return newState;
        
        case 'HIDE_MODAL':
            newState = {isVisible: false, type:null};
            return newState;
            
        default:
            return state;

    }
}

export default modalReducer;