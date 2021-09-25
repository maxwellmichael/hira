import {firebase} from '../../firebase/config';
import { auth } from "../../firebase/authServices";


export const ADD_TO_CART = (product)=>{

    return({
        type: "ADD_TO_CART",
        payload:{
            product: product
        },
    });
}

export const CLEAR_CART = ()=>{

    return({
        type: "CLEAR_CART",
    });
}

export const REMOVE_PRODUCT_FROM_CART = (id)=>{

    return({
        type: "REMOVE_PRODUCT_FROM_CART",
        payload: {
            id:id,
        }
    });
}

export const GET_CART_FROM_FIRESTORE = ()=>(dispatch)=>{
    const firestore = firebase.firestore();
    if(auth.currentUser){
        var user = firestore.collection('users')
        user.where('uid','==',auth.currentUser.toJSON().uid).get()
        .then((querySnapshot) => {
            dispatch(CLEAR_CART());
            querySnapshot.forEach((doc) => {
                doc.data().cart.forEach(product=>{
                    dispatch(ADD_TO_CART(product));
                })
                
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }
    else{
        return console.log('Not Logged In');
    }
    
}


export const ADD_PRODUCT_TO_FIRESTORE_CART=(product)=>(dispatch)=>{
    const firestore = firebase.firestore();
    if(auth){
        if(auth.currentUser){
            dispatch(ADD_TO_CART(product))
            var user = firestore.collection('users')
            user.where('uid','==',auth.currentUser.toJSON().uid).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let user = doc.data();
                    const checkProduct = user.cart.filter(pro=>product.id===pro.id)
                    if(checkProduct.length>0){
                        return console.log('Product Already in Cart');
                    }
                    user.cart.push(product);
                    firestore.collection('users').doc(doc.id).set(user).then(()=>dispatch(GET_CART_FROM_FIRESTORE()));
                });
                
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
            
        }
    }
    else{
        return console.log('Not Logged In');
    }
}

export const REMOVE_PRODUCT_FROM_FIRESTORE_CART=(product_id)=>(dispatch)=>{
    const firestore = firebase.firestore();

    if(auth){
        if(auth.currentUser){
            dispatch(REMOVE_PRODUCT_FROM_CART(product_id));
            var user = firestore.collection('users')
            user.where('uid','==',auth.currentUser.toJSON().uid).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let user = doc.data();
                    let newCart = user.cart.filter((value)=>value.id!==product_id)
                    user.cart=newCart;
                    firestore.collection('users').doc(doc.id).set(user).then(()=>dispatch(GET_CART_FROM_FIRESTORE()))
                    
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
            
        }
    }
    else{
        return console.log('Not Logged In');
    }
}