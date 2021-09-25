import {firebase} from './config'

export const getAuthenticationStatus = () => {
    return localStorage.getItem("isAuthenticated")
}

export const auth = firebase.auth();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
