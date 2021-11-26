import { Grid } from '@material-ui/core';
import { motion } from 'framer-motion';
import { PageLoadVariant1 } from '../../../variants/pageLoadVariants';
import Card from './sections/card';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { GET_CART_FROM_FIRESTORE } from '../../../redux/actions/cart.actions';
import { ADD_ORDER_TO_FIRESTORE } from '../../../redux/actions/orders.actions';
import { firebase } from '../../../firebase/config';
import { firestoreAutoId } from '../../../firebase/services';
import { getCurrentUser } from '../../../services/user';

const CartPage = ({ dispatch, cart }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(GET_CART_FROM_FIRESTORE())
    }, [dispatch])


    let totalAmount = 0;
    const shippingAmount = totalAmount < 10000 ? 500 : 0;

    cart.forEach((item) => totalAmount = totalAmount + item.selling_price * item.quantity)

    const handleCheckout = async () => {
        let response = await getCurrentUser();
        if (response.hasError) {
            return console.log(response.error);
        }
        const order = {
            id: firestoreAutoId(),
            userId: response.data.uid,
            status: 'Shipped',
            totalAmount,
            shippingAmount,
            createdAt: firebase.firestore.Timestamp.now(),
        };
        return dispatch(ADD_ORDER_TO_FIRESTORE(order))
    }


    return (
        <motion.div key='landing-page' variants={PageLoadVariant1} initial="initial" animate="animate" exit="exit">
            <Grid style={{ margin: '12px 0px 0px 0px', overflow: 'hidden' }} container>
                <Grid item xs={12} style={{ margin: '50px auto' }}>
                    <div className='headline1'>CART</div>
                </Grid>

                <Grid item xs={12} md={8} style={{ borderRight: '1px solid #edebef', borderBottom: '1px solid #edebef', marginBottom: 50 }}>

                    <Grid container spacing={3}>

                        <Grid item xs={12}>
                            <div style={{ padding: '12px 4px', fontSize: '2rem' }} className='headline6'>You have {cart.length} item(s) in your cart</div>
                        </Grid>
                    </Grid>

                    <Grid container>
                        {cart.map((set, i) => {
                            return (<Card key={i} set={set} />)
                        })}

                    </Grid>


                </Grid>

                <Grid item xs={12} md={4}>
                    <Grid container justify='center'>
                        <div className='headline6' style={{ fontSize: '2rem' }}>Order details</div>
                        <hr style={{ width: '80%', marginTop: 10 }} className='center-ball'></hr>
                    </Grid>

                    <Grid container direction='column' justify='space-between' >
                        <Grid style={{ margin: '12px 0 0 0' }} container spacing={3} direction='row'>
                            <Grid item xs={6}>
                                <div style={{ fontSize: '1.5rem', textAlign: 'left' }} className='headline6'>SUBTOTAL:</div>
                            </Grid>
                            <Grid item xs={6}>
                                <div style={{ fontSize: '1.5rem' }} className='headline6'>₹{totalAmount}</div>
                            </Grid>
                        </Grid>

                        <Grid style={{ margin: '12px 0 0 0' }} container spacing={3} direction='row'>
                            <Grid item xs={6}>
                                <div style={{ fontSize: '1.5rem', textAlign: 'left' }} className='headline6'>Shipping:</div>
                            </Grid>
                            <Grid item xs={6}>
                                <div style={{ fontSize: '1.5rem' }} className='headline6'>{shippingAmount > 0 ? `₹${shippingAmount}` : 'FREE'}</div>
                            </Grid>
                        </Grid>

                        <Grid style={{ margin: '12px 0 0 0' }} container spacing={3} direction='row'>
                            <Grid item xs={6}>
                                <div style={{ fontWeight: 600, fontSize: '1.5rem', textAlign: 'left' }} className='headline6'>Total Amount:</div>
                            </Grid>
                            <Grid item xs={6}>
                                <div style={{ fontWeight: 600, fontSize: '1.5rem' }} className='headline6'>₹{shippingAmount + totalAmount}</div>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container justify='space-between'>
                        <hr style={{ width: '80%' }} ></hr>
                    </Grid>

                    <Grid container justify='space-evenly'>
                        <button
                            onClick={() => handleCheckout()}
                            style={{ width: '80%' }}
                            className='primary-button'>
                            CHECKOUT
                        </button>
                    </Grid>

                </Grid>


            </Grid>
        </motion.div>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps)(CartPage);
