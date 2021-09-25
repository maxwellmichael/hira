import { Grid } from "@material-ui/core"
import cardStyle from "../styles/card.style";
import { ButtonGroup, Button } from "@material-ui/core";
import {GrAdd,GrSubtract} from 'react-icons/gr';
import { useState} from "react";
import { REMOVE_PRODUCT_FROM_FIRESTORE_CART } from "../../../../redux/actions/cart.actions";
import { useDispatch } from 'react-redux'

const Card = (props)=>{
    const dispatch = useDispatch()
    const classes = cardStyle();
    const [quantity, setQuantity] = useState(1);

    const addQuantity = ()=>{
        const newQuantity = quantity;
        if(newQuantity<10){
            setQuantity(newQuantity+1);
        }
        else{
            console.log('Product Quantity cannot be greater than 10')
        }
        
    }

    const reduceQuantity = ()=>{
        const newQuantity = quantity;
        if(newQuantity>1){
            setQuantity(newQuantity-1);
        }
        else{
            console.log('Product Quantity cannot be Less than 1')
        }
        
    }
   
    return(
        <Grid style={{margin:0, boxShadow:'0px -1px rgba(0, 0, 0, 0.2)'}} container spacing={3}>
            <Grid item xs={6} md={7}>
                <Grid container>

                    <Grid item xs={12} md={6}>
                        <img className={classes.cardImage} src={props.set.main_image.src} alt='Product Card' />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <p className={classes.cardItemName}>{props.set.name}</p>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item xs={6} md={5}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button onClick={()=>addQuantity()}><GrAdd/></Button>
                                <Button disabled >{quantity}</Button>
                            <Button onClick={()=>reduceQuantity()}><GrSubtract/></Button>
                        </ButtonGroup>
                    </Grid>

                    <Grid item xs={12}>
                        <p className={classes.cardItemPrice}>Price: ₹{props.set.selling_price}/-</p>
                    </Grid>

                    <Grid item xs={12}>
                        <p className={classes.cardItemPrice}>Total: ₹{props.set.selling_price*quantity}/-</p>
                    </Grid>

                    <Grid item xs={12}>
                        <Button onClick={()=>dispatch(REMOVE_PRODUCT_FROM_FIRESTORE_CART(props.set.id))} variant='contained' color='secondary' size='small'>
                            Remove
                        </Button>
                    </Grid>

                </Grid>
            </Grid>

        </Grid>
    )
}

export default Card;