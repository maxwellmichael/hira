import { auth, googleAuthProvider } from "../../firebase/authServices";
import {firebase} from '../../firebase/config';


export const LOGIN_SUCCESS = (user) => {
 
  return {
    type: "LOGIN_SUCCESS",
    currentUser: user,
  }
}

export const REGISTER_SUCCESS = (user) => {
  return {
    type: "REGISTER_SUCCESS",
    currentUser: user,
  }
}

export const LOGOUT_SUCCESS = ()=>{
    return {
        type: "LOGOUT_SUCCESS",
      }
}

export const REGISTER = (email, password, name) => async dispatch => {
  try {
    await auth.createUserWithEmailAndPassword(email, password)
    .then((result)=>{
      firebase.firestore().collection('users').add({
        uid: result.user.uid,
        userName: name,
        email: result.user.email,
        cart: [],
      })
      firebase.firestore().collection('users').where('uid','==',auth.currentUser.toJSON().uid).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            dispatch(REGISTER_SUCCESS(doc.data()));
        });
      })
    })
    .catch((err)=>{
      console.log(err)
    })
    
  } catch (error) {
    throw error
  }
}

export const LOGIN = (email, password) => async dispatch => {
  try {
    await auth.signInWithEmailAndPassword(email, password)
    firebase.firestore().collection('users').where('uid','==',auth.currentUser.toJSON().uid).get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          dispatch(LOGIN_SUCCESS(doc.data()));
      });
    })
  } catch (error) {
    throw error
  }
}

export const LOGIN_WITH_GOOGLE = ()=> async dispatch =>{
    try{
        auth.signInWithPopup(googleAuthProvider).then((result) => {
          firebase.firestore().collection('users').where('uid','==',result.user.uid).get()
          .then((querySnapshot) => {
            if(querySnapshot.empty){
              firebase.firestore().collection('users').add({
                uid: result.user.uid,
                userName: result.user.displayName,
                email: result.user.email,
                profilePhoto: result.user.photoURL,
                cart: [],
              })
              .then(() => {
                dispatch(LOGIN_SUCCESS(auth.currentUser()));
              })
              //dispatch(LOGIN_SUCCESS(auth.currentUser.toJSON()))
            }
            else{
              querySnapshot.forEach((doc) => {
                dispatch(LOGIN_SUCCESS(doc.data()));
              });
            }
            
          })
          .catch((err)=>{
            console.log(err)
          })
        })
    }
    catch (error) {
        throw error
    }
}

export const LOGOUT = ()=>async dispatch =>{
    try{
        auth.signOut().then(result => {
            // successful...
            console.log(result)
            dispatch(LOGOUT_SUCCESS())
        })
    }
    catch (error) {
        throw error;
    }
}

export const UPDATE_USER = ()=>async dispatch =>{
    try{
        auth.onAuthStateChanged(user => {
          if(user){
            firebase.firestore().collection('users').where('uid','==',user.uid).get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                  dispatch(LOGIN_SUCCESS(doc.data()));
              });
            })
          }
          
        });
    }
    catch(error){
        throw error;
    }
}