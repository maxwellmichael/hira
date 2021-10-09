import { auth } from "../../firebase/authServices";
import { toast } from 'react-toastify';
import { getUserWithEmailAndPassword, getUserWithGoogle, registerUserWithEmail, getCurrentUser } from "../../services/user";
import { GET_CART_FROM_FIRESTORE } from "./cart.actions";

export const LOGIN_SUCCESS = (user) => {
  toast.success(`Welcome ${user.userName}`);
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
  const isRegistered = await registerUserWithEmail(email, password, name);
  if (!isRegistered) {
    console.log('Cannot Register User');
    return toast.error(`An Error Occured Please Try again Later`);
  }
  const response = await getCurrentUser();
  if (response.hasError) {
    console.log(response.error);
    return toast.error(`An Error Occured Please Try again Later`);
  }
  dispatch(REGISTER_SUCCESS(response.data));
}

export const LOGIN = (email, password) => async dispatch => {
  try {
    const response = await getUserWithEmailAndPassword(email, password);
    if (response.hasError) {
      console.log(response.error)
      return toast.error(`An Error Occured Please Try again Later`);
    }
    dispatch(LOGIN_SUCCESS(response.data));
    dispatch(UPDATE_USER());
  }
  catch (error) {
    console.log(error);
    return toast.error(`An Error Occured Please Try again Later`);
  }
}

export const LOGIN_WITH_GOOGLE = () => async dispatch => {

  const response = await getUserWithGoogle();
  if (response.hasError) {
    console.log(response.error);
    return toast.error(`An Error Occured Please Try again Later`);
  }
  dispatch(UPDATE_USER());
}

export const LOGOUT = () => async dispatch => {
  try {
    auth.signOut().then(() => {
      dispatch(LOGOUT_SUCCESS())
      dispatch(UPDATE_USER());
      return toast.success(`You Have been Logged Out`);
    })
  }
  catch (error) {
    console.log(error);
    return toast.error(`An Error Occured Please Try again Later`);
  }
}

export const UPDATE_USER = () => async dispatch => {
  try {
    const response = await getCurrentUser();

    if(response.hasError){
      console.log(response.error)
      return toast.error(`An Error Occured Please Try again Later`);
    }
    dispatch(LOGIN_SUCCESS(response.data));
    dispatch(GET_CART_FROM_FIRESTORE());
  }
  catch (error) {
    console.log(error)
    return toast.error(`An Error Occured Please Try again Later`);
  }
}


