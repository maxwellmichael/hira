import {firebase} from '../firebase/config';


export const getProductsWithCategory = async (categories)=>{
    if(!categories){
        return {hasError: true, error:'Invalid Category', data:null};
    }
    return await firebase.firestore().collection('sets')
    .where('category','in',categories).get()
    .then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push({...doc.data(), id:doc.id})
        });
        return {hasError: false, data:data, error:null};
    })
    .catch((error) => {
        return {hasError: true, error:error, data:null};
    });
}

export const getProductsWithMaterial = async (materials)=>{
    if(!materials){
        return {hasError: true, error:'Invalid Material', data:null};
    }
    return await firebase.firestore().collection('sets')
    .where('material','in',materials).get()
    .then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push({...doc.data(), id:doc.id})
        });
        return {hasError: false, data:data, error:null};
    })
    .catch((error) => {
        return {hasError: true, error:error, data:null};
    });
}

export const getAllProducts = async ()=>{
    return await firebase.firestore().collection('sets').get()
    .then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push({...doc.data(), id:doc.id})
        });
        return {hasError: false, data:data, error:null};
    })
    .catch((error) => {
        return {hasError: true, error:error, data:null};
    });
}