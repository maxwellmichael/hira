
const cartReducer = (state=[], action)=>{
    let cart = state.map(value=>value)
    switch(action.type){

        case 'ADD_TO_CART':
            cart.push(action.payload.product);
            return cart;
        
        case 'CLEAR_CART':
            return [];

        case 'REMOVE_PRODUCT_FROM_CART':
            console.log('Payload', action.payload)
            console.log('Cart Before',cart)
            const newCart = cart.filter((product)=>product.id!==action.payload.id);
            console.log('Cart After',newCart);
            return newCart;

        default:
            return state;
    }
}

export default cartReducer;