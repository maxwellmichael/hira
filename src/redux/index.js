import {combineReducers} from 'redux';
import productReducer from './reducers/product.reducer';
import cartReducer from './reducers/cart.reducer';
import userReducer from './reducers/user.reducer';
import modalReducer from './reducers/modal.reducer';
import addressReducer from './reducers/address.reducer';

import { firestoreReducer } from 'redux-firestore';


const rootReducer = combineReducers(
    {
        products: productReducer, 
        cart: cartReducer,
        user: userReducer, 
        firestore: firestoreReducer,
        modal: modalReducer,
        address: addressReducer,
    }
);


export default rootReducer;