
const initialState = [];


const productReducer = (state=initialState, action)=>{
    let product = {};
    switch(action.type){

        case 'ADD_PRODUCT_TO_STORE':
            product = action.payload.product;
            return [...state, product];
        
        case 'REMOVE_ALL_PRODUCTS_FROM_STORE':
            return [];

        default:
            return [...state];

    }
}

export default productReducer;