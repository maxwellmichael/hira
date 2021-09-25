import {firebase} from '../../firebase/config';
import {auth} from '../../firebase/authServices';

export const ADD_ADDRESS_TO_FIRESTORE = (data) => async (dispatch) => {
    
    const firestore = firebase.firestore();
    const address = firestore.collection('address')
    address.add(data)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        dispatch(CLEAR_ADDRESS())
        dispatch(GET_ADDRESS(auth.currentUser.uid))
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

export const REMOVE_ADDRESS_FROM_FIRESTORE = (id) => async (dispatch) => {
    
    const firestore = firebase.firestore();
    firestore.collection('address').doc(id).delete()
    .then(() => {
        console.log('Address Deleted')
        dispatch(CLEAR_ADDRESS())
        dispatch(GET_ADDRESS(auth.currentUser.uid))
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}

export const UPDATE_ADDRESS_ON_FIRESTORE = (id, data) => async (dispatch) => {
    console.log(data)
    const firestore = firebase.firestore();
    firestore.collection('address').doc(id).update(data);
    dispatch(CLEAR_ADDRESS())
    dispatch(GET_ADDRESS(auth.currentUser.uid))
}

export const GET_ADDRESS = (uid) => async (dispatch) => {
    
    const firestore = firebase.firestore();
    firestore.collection('address').where('user_id','==',uid).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            dispatch(ADD_ADDRESS({...doc.data(), id:doc.id}))
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    
}

export const ADD_ADDRESS = (address) => {
    return {
      type: "ADD_ADDRESS",
      payload:{
          address: address,
      }
    }
}

export const CLEAR_ADDRESS = () => {
    return {
      type: "CLEAR_ADDRESS",
      payload:{
      }
    }
}