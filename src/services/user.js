import { auth, googleAuthProvider } from "../firebase/authServices";
import { firebase } from '../firebase/config';


export const getUserWithEmailAndPassword = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password)
    const response = await getUserWithUID(auth.currentUser.toJSON().uid);
    return response;
}

export const getUserWithUID = async (uid) => {
    const user = await firebase.firestore().collection('users').where('uid', '==', uid).get()
    if (user.empty) {
        return { data: null, hasError: true, error: user.message };
    }

    let userData;
    user.docs.forEach(data => userData = data.data());
    return { data: userData, hasError: false, error: null };
}


export const getUserWithGoogle = async () => {

    try {
        const google = await auth.signInWithPopup(googleAuthProvider);

        const user = await firebase.firestore().collection('users').where('uid', '==', google.user.uid).get()
        if (user.empty) {
            await firebase.firestore().collection('users').add({
                uid: google.user.uid,
                userName: google.user.displayName,
                email: google.user.email,
                profilePhoto: google.user.photoURL,
                cart: [],
            })
            return { hasError: false, data: google.user, error: null };
        }
        return { hasError: false, data: google.user, error: null };
    }
    catch (error) {
        return { hasError: true, error: error, data: null };
    }

}


export const getCurrentUser = async () => {
    return await getUserWithUID(auth.currentUser.toJSON().uid)
}


export const registerUserWithEmail = async (email, password, userName) => {
    try {
        const result = await auth.createUserWithEmailAndPassword(email, password);
        if (!result) {
            return {hasError: true, data: null, error: null};
        }
        await firebase.firestore().collection('users').add({
            uid: result.user.uid,
            userName: userName,
            email: result.user.email,
            cart: [],
        })
        return {hasError: false, data: null, error: null};
    }
    catch (error) {
        console.log(error);
        return {hasError: true, data: null, error: error};
    }
}