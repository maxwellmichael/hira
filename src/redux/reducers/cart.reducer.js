
const cartReducer = (state = [], action) => {
    let cart = state.map(value => value)
    switch (action.type) {

        case 'ADD_TO_CART':
            cart.push(action.payload.product);
            return cart;

        case 'CLEAR_CART':
            return [];

        case 'REMOVE_PRODUCT_FROM_CART':
            const newCart = cart.filter((product) => product.id !== action.payload.id);
            console.log('Cart After', newCart);
            return newCart;

        case 'UPDATE_PRODUCT_IN_CART':
            const productIndex = cart.findIndex((product) => product.id === action.payload.product.id);
            cart[productIndex] = action.payload.product;
            return cart;


        default:
            return state;
    }
}

export default cartReducer;