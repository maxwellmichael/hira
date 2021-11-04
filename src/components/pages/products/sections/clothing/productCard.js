import { Grid} from '@material-ui/core';
import { connect } from 'react-redux';

const ProductCard = (props) => {
    const images = props.product.items.map((item) => item.image_url.src)
    images.push(props.product.main_image.src);

    return (
        <div className="product-card">
            <Grid container style={{ margin: 0, width: '100%', padding: 0 }}>
                <div className="product-tag"><h2>SALE {Math.round(100-(parseInt(props.product.selling_price)/parseInt(props.product.maximum_retail_price)*100))}% OFF</h2></div>
                <Grid xs={12} item style={{ margin: 0, width: '100%', padding: 0 }}>
                    <div style={{backgroundImage:`url(${props.product.main_image.src})`}} className='product-card-image'>
                    </div>
                </Grid>

                <Grid xs={12} item style={{ margin: 0, width: '100%', padding: 0 }}>
                    <div className="product-card-content-container">
                        <div className="product-card-content-primary">

                            <Grid container spacing={3}>

                                <Grid item xs={12}>
                                    <div className="product-card-product-primary" style={{color:'#1f1f21'}}>
                                        {props.product.name}
                                    </div>
                                    <div style={{textAlign:'center'}} className="product-card-product-primary">
                                        ₹{props.product.selling_price} <strike style={{color:'#1f1f21'}}>₹{props.product.maximum_retail_price}</strike>
                                    </div>
                                </Grid>

        

                                {/* <Grid item>
                                    <Button onClick={() => props.dispatch(ADD_PRODUCT_TO_FIRESTORE_CART(props.product))} variant="contained" color="secondary">
                                        <FaCartPlus style={{ width: 24, height: 20 }} />
                                    </Button>
                                </Grid> */}

                            </Grid>
                        </div>
                    </div>
                </Grid>

            </Grid>




        </div>
    )
}


export default connect()(ProductCard);