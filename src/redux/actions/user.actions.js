import { auth } from "../../firebase/authServices";
import { toast } from 'react-toastify';
import { getUserWithEmailAndPassword, getUserWithGoogle, registerUserWithEmail, getCurrentUser } from "../../services/user";
import { GET_CART_FROM_FIRESTORE } from "./cart.actions";

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

export const LOGOUT_SUCCESS = () => {
  return {
    type: "LOGOUT_SUCCESS",
  }
}

export const REGISTER = (email, password, name) => async dispatch => {
  const registerResponse = await registerUserWithEmail(email, password, name);
  if (registerResponse.hasError) {
    console.log(registerResponse.error)
    return toast.error(registerResponse.error.message);
  }
  const response = await getCurrentUser();
  if (response.hasError) {
    console.log(response.error);
    return toast.error(response.error.message);
  }
  dispatch(REGISTER_SUCCESS(response.data));
  return toast.success('You have been registered Successfully.')
}

export const LOGIN = (email, password) => async dispatch => {
  try {
    const response = await getUserWithEmailAndPassword(email, password);
    if (response.hasError) {
      console.log(response.error)
      return toast.error(response.error.message);
    }
    dispatch(LOGIN_SUCCESS(response.data));
    dispatch(UPDATE_USER());
  }
  catch (error) {
    console.log(error);
    return toast.error(error.message);
  }
}

export const LOGIN_WITH_GOOGLE = () => async dispatch => {

  const response = await getUserWithGoogle();
  if (response.hasError) {
    console.log(response.error);
    return toast.error(response.error.message);
  }
  dispatch(UPDATE_USER());
}

export const LOGOUT = () => async dispatch => {
  try {
    auth.signOut().then(() => {
      dispatch(LOGOUT_SUCCESS())
      return toast.success(`You Have been Logged Out`);
    })
  }
  catch (error) {
    console.log(error);
    return toast.error(error.message);
  }
}

export const UPDATE_USER = () => async dispatch => {
  try {
    const response = await getCurrentUser();

    if(response.hasError){
      console.log(response.error)
      return toast.error(response.error.message);
    }
    dispatch(LOGIN_SUCCESS(response.data));
    dispatch(GET_CART_FROM_FIRESTORE());
  }
  catch (error) {
    console.log(error)
    return toast.error(error.message);
  }
}


