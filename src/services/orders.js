import {firebase} from '../firebase/config';
import { getCurrentUser } from "./user";

export const getAllOrders = async ()=>{
    let data = []
    let response = await getCurrentUser();
    if(response.hasError){
      return response;
    }
    const uid = response.data.uid; 
    console.log('UID:',uid);

    const firestore = firebase.firestore();
    return firestore.collection('orders').where('userId','==',uid).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            data.push({...doc.data(), id:doc.id})
        });
        response.hasError = false;
        response.data = data;
        response.error = null;
        return response;
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
        response.hasError = true;
        response.data = null;
        response.error = error;
        return response;
    });
}

export const addOrderToFirestore = async (order)=>{
    const firestore = firebase.firestore();
    return firestore.collection('orders').add(order)
    .then((docRef) => {
        let response={};
        console.log(docRef)
        response.hasError = false;
        response.data = docRef;
        response.error = null;
        return response;
    })
    .catch((error) => {
        let response={};
        console.error("Error adding document: ", error);
        response.hasError = true;
        response.data = null;
        response.error = error;
        return response;
    });
}

export const removeOrderFromFirestore = async (id)=>{
    let response = await getCurrentUser();
    if(response.hasError){
      return response;
    }
    const uid = response.data.uid; 
    console.log('UID:',uid);

    const firestore = firebase.firestore();
    var docRef = firestore.collection('orders').doc(uid)
    docRef.get().then(doc=>{
        if(doc.exists){
            console.log(doc.data());
        }
    })
    // const newOrders = orders.filter(order=>order.id!==id);
    // console.log(newOrders);
    // return orders.add(order)
    // .then((docRef) => {
    //     console.log(docRef)
    //     response.hasError = false;
    //     response.data = docRef;
    //     response.error = null;
    //     return response;
    // })
    // .catch((error) => {
    //     console.error("Error adding document: ", error);
    //     response.hasError = true;
    //     response.data = null;
    //     response.error = error;
    //     return response;
    // });

}