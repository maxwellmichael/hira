import { firebase } from '../firebase/config';
import { getCurrentUser } from './user';

export const getAllAddressFromFireStore = async () => {
    let data = []
    let response = await getCurrentUser();
    if (response.hasError) {
        return response;
    }
    const uid = response.data.uid;
    const firestore = firebase.firestore();
    return firestore.collection('address').where('user_id', '==', uid).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                data.push({ ...doc.data(), id: doc.id });
            });
            return { hasError: false, error: null, data: data }
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
            return { hasError: true, error: error, data: null }
        });
}

export const removeAddressFromFirestore = async (id) => {
    const firestore = firebase.firestore();
    return firestore.collection('address').doc(id).delete()
        .then(() => {
            console.log('Address Deleted')
            return { hasError: false, error: null, data: null }
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
            return { hasError: true, error: error, data: null }
        });
}

export const addAddressToFirestore = async (data) => {
    const firestore = firebase.firestore();
    const address = firestore.collection('address')
    return address.add(data)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            return { hasError: false, error: null, data: null }
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            return { hasError: true, error: error, data: null }
        });
}


export const updateAddressOnFirestore = async (id, data) => {
    const firestore = firebase.firestore();
    return firestore.collection('address').doc(id).update(data)
        .then(() => {
            return { hasError: false, error: null, data: null }
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            return { hasError: true, error: error, data: null }
        });
}