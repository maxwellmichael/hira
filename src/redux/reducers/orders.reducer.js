const initialState = []


const ordersReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {

        case 'ADD_ORDER':
            newState = action.payload.orders;
            return [...state, newState];

        case 'REMOVE_ORDER':
            let orders = [...state];
            var newOrders = orders.filter(order=>order.id!==action.payload.id);
            return newOrders;

        case 'SET_ORDERS':
            newState = action.payload.orders;
            return newState;

        case 'CLEAR_ORDER':
            return [];

        default:
            return state;

    }
}

export default ordersReducer;