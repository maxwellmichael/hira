import { addOrderToFirestore, getAllOrders } from '../../services/orders';
import { toast } from 'react-toastify';

export const ADD_ORDER_TO_FIRESTORE = (data) => async (dispatch) => {
    const response = await addOrderToFirestore(data);
    if (response.hasError) {
        console.log(response.error);
        return toast.error(`An Error Occured Please Try again Later`);
    }
    return dispatch(ADD_ORDER(data));
}
    

export const GET_ORDERS_FROM_FIRESTORE = () => async (dispatch) => {
    const response = await getAllOrders();
    if (response.hasError) {
        console.log(response.error);
        return toast.error(`An Error Occured Please Try again Later`);
    }
    return dispatch(SET_ORDERS(response.data));
}

export const ADD_ORDER = (order) => {
    return {
      type: "ADD_ORDER",
      payload:{
          order: order,
      }
    }
}

export const SET_ORDERS = (orders) => {
    return {
      type: "SET_ORDERS",
      payload:{
          orders: orders,
      }
    }
}

export const CLEAR_ORDERS = () => {
    return {
      type: "CLEAR_ORDERS",
      payload:{
      }
    }
}