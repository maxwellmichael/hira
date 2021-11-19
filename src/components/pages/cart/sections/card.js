import { Grid } from "@material-ui/core"
import cardStyle from "../styles/card.style";
import { ButtonGroup, Button } from "@material-ui/core";
import {GrAdd,GrSubtract} from 'react-icons/gr';
import { REMOVE_PRODUCT_FROM_FIRESTORE_CART, UPDATE_PRODUCT_TO_FIRESTORE_CART } from "../../../../redux/actions/cart.actions";
import { useDispatch } from 'react-redux'

const Card = (props)=>{
    const dispatch = useDispatch()
    const classes = cardStyle();

    const addQuantity = ()=>{
        let newQuantity = props.set.quantity;
        if(newQuantity<10){
            newQuantity+=1;
            let product = props.set;
            product.quantity = newQuantity;
            dispatch(UPDATE_PRODUCT_TO_FIRESTORE_CART(product))
        }
        else{
            console.log('Product Quantity cannot be greater than 10')
        }
        
    }

    const reduceQuantity = ()=>{
        let newQuantity = props.set.quantity;
        if(newQuantity>1){
            newQuantity-=1;
            let product = props.set;
            product.quantity = newQuantity;
            dispatch(UPDATE_PRODUCT_TO_FIRESTORE_CART(product));
        }
        else{
            console.log('Product Quantity cannot be Less than 1')
        }
        
    }
   
    return(
        <Grid style={{margin:0, boxShadow:'0px -1px rgba(0, 0, 0, 0.2)'}} container>
            <Grid item xs={7} md={8}>
                <Grid container spacing={1}>

                    <Grid item xs={12} md={5}>
                        <img className={classes.cardImage} src={props.set.main_image.src} alt='Product Card' />
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <p className={classes.cardItemName}>{props.set.name}</p>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item xs={5} md={4}>
                <Grid container direction='column' spacing={3} alignItems='flex-start' >
                    <Grid item>
                        <ButtonGroup disableElevation style={{border:'1px solid black'}} variant="contained" color='primary'>
                            <Button onClick={()=>addQuantity()}><GrAdd/></Button>
                            <Button disableRipple disableFocusRipple disableTouchRipple><div style={{color:'#771f52'}} className='subtitle1'>{props.set.quantity}</div></Button>
                            <Button onClick={()=>reduceQuantity()}><GrSubtract/></Button>
                        </ButtonGroup>
                    </Grid>

                    <Grid item>
                        <div style={{textAlign:'left'}} className='subtitle1'>Per item: ₹{props.set.selling_price}</div>
                        <div style={{textAlign:'left'}} className='subtitle1'>Total: ₹{props.set.selling_price*props.set.quantity}</div>
                    </Grid>

                    <Grid item>
                        <Button disableElevation onClick={()=>dispatch(REMOVE_PRODUCT_FROM_FIRESTORE_CART(props.set.id))} variant='contained' color='secondary' size='small'>
                            Remove
                        </Button>
                    </Grid>

                </Grid>
            </Grid>

        </Grid>
    )
}

export default Card;