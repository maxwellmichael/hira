import { Grid} from '@material-ui/core';
import { connect } from 'react-redux';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useHistory } from 'react-router-dom';
import StarRatingDisplay from '../../../../utils/starRatingDisplay';


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
                duration: 1,
            }
        });
    }

    const redirect = ()=>{
        history.push({pathname:'/products/details', state:props.product})
    }


    return (
        <Grid item xs={12} md={4} lg={3} ref={ref}>
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
                                        <div className="product-card-product-primary">
                                            {props.product.name}
                                        </div>
                                        <div className="product-card-product-primary">
                                           - ₹{props.product.selling_price} <strike>₹{props.product.maximum_retail_price}</strike>
                                        </div>
                                        <div className="product-card-product-rating">
                                            <StarRatingDisplay rating={4} /><span className='review'>1665 Reviews</span>
                                        </div>
                                    </Grid>

                                </Grid>
                            </div>
                        </div>
                    </Grid>

                </Grid>




            </motion.div>
        </Grid>
    )
}


export default connect()(ProductCard);