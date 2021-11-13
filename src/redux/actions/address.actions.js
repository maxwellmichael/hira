import { getAllAddressFromFireStore, removeAddressFromFirestore, updateAddressOnFirestore, addAddressToFirestore } from '../../services/address';
import { toast } from 'react-toastify';


export const ADD_ADDRESS_TO_FIRESTORE = (data) => async (dispatch) => {
    const response = await addAddressToFirestore(data);
    if (response.hasError) {
        console.log(response.error);
        return toast.error(`An Error Occured Please Try again Later`);
    }
    return dispatch(ADD_ADDRESS(data));
}

export const REMOVE_ADDRESS_FROM_FIRESTORE = (id) => async (dispatch) => {
    const response = await removeAddressFromFirestore(id);
    if (response.hasError) {
        console.log(response.error);
        return toast.error(`An Error Occured Please Try again Later`);
    }
    return dispatch(REMOVE_ADDRESS(id));
    
}

export const UPDATE_ADDRESS_ON_FIRESTORE = (id, data) => async (dispatch) => {
    const response = await updateAddressOnFirestore(id, data);
    if (response && response.hasError) {
        console.log(response.error);
        return toast.error(`An Error Occured Please Try again Later`);
    }
    return dispatch(UPDATE_ADDRESS(id, data));
}

export const GET_ADDRESS = () => async (dispatch) => {
    
    const response = await getAllAddressFromFireStore();
    if (response && response.hasError) {
        console.log(response.error);
        return toast.error(`An Error Occured Please Try again Later`);
    }
    return dispatch(SET_ADDRESSES(response.data));
    
}

export const ADD_ADDRESS = (address) => {
    return {
      type: "ADD_ADDRESS",
      payload:{
          address,
      }
    }
}

export const UPDATE_ADDRESS = (id, data) => {
    return {
      type: "UPDATE_ADDRESS",
      payload:{
          id,
          data,
      }
    }
}

export const SET_ADDRESSES = (addresses) => {
    return {
      type: "SET_ADDRESSES",
      payload:{
          addresses: addresses,
      }
    }
}

export const REMOVE_ADDRESS = (id) => {
    return {
      type: "REMOVE_ADDRESS",
      payload:{
          id: id,
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