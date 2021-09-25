import {firebase} from '../../firebase/config';

export const GET_PRODUCTS_FROM_FIRESTORE = (query)=>(dispatch)=>{

    const firestore = firebase.firestore();
    var sets = firestore.collection('sets')

    if(query){
        if(query.category){
            sets = sets.where('category','==',query.category)
        }
    }

    sets.get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            dispatch(ADD_PRODUCT_TO_STORE({...doc.data(), id:doc.id}))
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}


export const ADD_PRODUCT_TO_STORE = (product) => {
    return {
      type: "ADD_PRODUCT_TO_STORE",
      payload:{
          product: product,
      }
    }
}

export const REMOVE_ALL_PRODUCTS_FROM_STORE = () => {
    return {
      type: "REMOVE_ALL_PRODUCTS_FROM_STORE",
    }
}

