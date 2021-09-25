import {Grid} from '@material-ui/core';
import Card from './sections/card';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { GET_CART_FROM_FIRESTORE } from '../../../redux/actions/cart.actions';

const CartPage = ({dispatch, cart})=>{

    useEffect(()=>{
        dispatch(GET_CART_FROM_FIRESTORE())
    },[dispatch])

    return(
        <Grid container spacing={3}>

            <Grid item xs={12} md={8}>

                <Grid style={{marginTop:'12px'}} container spacing={3}>

                    <Grid item xs={6}>
                        <h4>Product</h4>
                    </Grid>

                    <Grid item xs={6}>
                        <h4>Quantity</h4>
                    </Grid>

                </Grid>

                <Grid  container>
                  {cart.map((set, i)=><Card key={i} set={set} />)}

                </Grid>

              
            </Grid>

            <Grid item xs={12} md={4}>

            </Grid>


        </Grid>
    );
}

const mapStateToProps = (state)=>{
    return{
        cart: state.cart,
    }
}

export default connect(mapStateToProps)(CartPage);
