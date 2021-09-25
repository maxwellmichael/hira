import Carousel from 'react-bootstrap/Carousel';
import {Grid, Button} from '@material-ui/core';
import {FaCartPlus} from 'react-icons/fa';
import { ADD_PRODUCT_TO_FIRESTORE_CART } from '../../../../../redux/actions/cart.actions';
import { connect } from 'react-redux';

const ProductCard = (props)=>{

    const images = props.product.items.map((item)=>item.image_url.src)
    images.push(props.product.main_image.src);

    return(
        <div className="product-card">
            <Grid container style={{margin:0,width:'100%',padding:0}}>

                <Grid xs={6} md={12} item style={{margin:0,width:'100%',padding:0}}>
                    <div className='product-card-carousel'>
                        <Carousel>
                            {images.map((image, i)=>
                                <Carousel.Item key={i} >
                                    <img
                                    className="d-block w-100"
                                    src={image}
                                    alt="slide"
                                    />
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </div>
                </Grid>

                <Grid xs={6} md={12} item style={{margin:0,width:'100%',padding:0}}>
                    <div className="product-card-content-container">
                        <div className="product-card-content-primary">
                            
                            <Grid container spacing={3}>

                                <Grid item xs={12}>
                                    <div className="product-card-product-name">
                                        {props.product.name}
                                    </div>
                                </Grid>

                                <Grid xs={6} item>
                                    <div className="product-card-content-text-secondary">
                                        ₹{props.product.selling_price}<span>/set</span>
                                    </div>
                                    <div className="product-card-content-text-secondary">
                                        {props.product.items.length}<span> Pieces</span>
                                    </div>
                                </Grid>

                                <Grid xs={6} item>
                                    <Button onClick={()=>props.dispatch(ADD_PRODUCT_TO_FIRESTORE_CART(props.product))} variant="contained" color="secondary">
                                        <FaCartPlus style={{width:24,height:20}} />
                                    </Button>
                                </Grid>

                            </Grid>
                        </div>
                    </div>
                </Grid>

            </Grid>
            
            
            

        </div>
    )
}


export default connect()(ProductCard);