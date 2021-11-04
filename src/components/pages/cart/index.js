import { Grid, Button } from '@material-ui/core';
import Card from './sections/card';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { GET_CART_FROM_FIRESTORE } from '../../../redux/actions/cart.actions';

const CartPage = ({ dispatch, cart }) => {

    useEffect(() => {
        dispatch(GET_CART_FROM_FIRESTORE())
    }, [dispatch])


    let totalAmount = 0;
    const shippingAmount = totalAmount < 10000 ? 500 : 0;

    cart.forEach((item) => totalAmount = totalAmount + item.selling_price * item.quantity)


    return (
        <Grid style={{ margin: '12px 0px 0px 0px', overflow: 'hidden' }} container>
            <Grid item xs={12} style={{ margin: '50px auto' }}>
                <div className='headline1'>Shopping Cart</div>
            </Grid>

            <Grid item xs={12} md={8} style={{ borderRight: '1px solid #edebef', borderBottom: '1px solid #edebef', marginBottom: 50 }}>

                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        <div style={{ padding: '12px 4px' }} className='headline6'>You have {cart.length} item(s) in your cart:</div>
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
                    <div className='headline3'>Order details</div>
                    <hr style={{ width: '80%', marginTop: 10 }} className='center-ball'></hr>
                </Grid>

                <Grid container direction='column' justify='space-between' >
                    <Grid style={{ margin: '12px 0 0 0' }} container spacing={3} direction='row'>
                        <Grid item xs={6}>
                            <div style={{}} className='headline6'>Subtotal:</div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className='headline6'>₹{totalAmount}</div>
                        </Grid>
                    </Grid>

                    <Grid style={{ margin: '12px 0 0 0' }} container spacing={3} direction='row'>
                        <Grid item xs={6}>
                            <div style={{}} className='headline6'>Shipping:</div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className='headline6'>{shippingAmount > 0 ? `₹${shippingAmount}` : 'FREE'}</div>
                        </Grid>
                    </Grid>

                    <Grid style={{ margin: '12px 0 0 0' }} container spacing={3} direction='row'>
                        <Grid item xs={6}>
                            <div style={{fontWeight:600}} className='headline6'>Total Amount:</div>
                        </Grid>
                        <Grid item xs={6}>
                            <div style={{fontWeight:600}} className='headline6'>₹{shippingAmount + totalAmount}</div>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container justify='space-between'>
                    <hr style={{ width: '80%' }} ></hr>
                </Grid>

                <Grid container justify='space-evenly'>
                    <Button style={{width:'80%', height:50}} variant='contained' color='secondary'><span style={{color:'white'}} className='headline6'>CHECKOUT</span></Button>
                </Grid>

            </Grid>


        </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps)(CartPage);
