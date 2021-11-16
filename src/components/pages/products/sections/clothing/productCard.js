import { Grid} from '@material-ui/core';
import { connect } from 'react-redux';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
// import { ADD_PRODUCT_TO_FIRESTORE_CART } from '../../../../../redux/actions/cart.actions';
// import { IoMdAdd } from 'react-icons/io';
import { useHistory } from 'react-router-dom';


const ProductCard = (props) => {
    const images = props.product.items.map((item) => item.image_url.src)
    images.push(props.product.main_image.src);
    const { inView, ref } = useInView();
    const animationControl = useAnimation();
    let history = useHistory();


    if (inView) {
        animationControl.start({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.1,
                duration: 0.6,
            }
        });
    }

    const redirect = ()=>{
        history.push({pathname:'/products/details', state:props.product})
    }


    return (
        <div ref={ref}>
            <motion.div className="product-card" initial={{ y: 600, opacity: 0 }} animate={animationControl}>
                <Grid onClick={redirect} container style={{ margin: 0, width: '100%', padding: 0 }}>
                    <div className="product-tag"><h2>SALE {Math.round(100 - (parseInt(props.product.selling_price) / parseInt(props.product.maximum_retail_price) * 100))}% OFF</h2></div>
                    
                    <Grid xs={12} item style={{ margin: 0, width: '100%', padding: 0 }}>
                        <div style={{ backgroundImage: `url(${props.product.main_image.src})` }} className='product-card-image'>
                        </div>
                    </Grid>

                    <Grid xs={12} item style={{ margin: 0, width: '100%', padding: 0 }}>
                        <div className="product-card-content-container">
                            <div className="product-card-content-primary">

                                <Grid container spacing={3}>

                                    <Grid item xs={12}>
                                        {/* <IconButton onClick={() => props.dispatch(ADD_PRODUCT_TO_FIRESTORE_CART(props.product))} variant="contained" color="secondary">
                                            <IoMdAdd />
                                        </IconButton> */}
                                        <div className="product-card-product-primary" style={{ color: '#1f1f21' }}>
                                            {props.product.name}
                                        </div>
                                        <div style={{ textAlign: 'center' }} className="product-card-product-primary">
                                            ₹{props.product.selling_price} <strike style={{ color: '#1f1f21' }}>₹{props.product.maximum_retail_price}</strike>
                                        </div>
                                    </Grid>

                                </Grid>
                            </div>
                        </div>
                    </Grid>

                </Grid>




            </motion.div>
        </div>
    )
}


export default connect()(ProductCard);