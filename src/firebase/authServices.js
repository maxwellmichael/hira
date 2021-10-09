import {firebase} from './config'

export const getAuthenticationStatus = () => {
    return localStorage.getItem("isAuthenticated")
}

export const auth = firebase.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
