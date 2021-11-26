import { Grid } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageLoadVariant1 } from '../../../../../variants/pageLoadVariants';
import QuantityButton from '../../../../utils/quantityButton';
import StarRatingDisplay from '../../../../utils/starRatingDisplay';

const ProductDetailsView = (props) => {
    const product = props.location.state;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const isMobile = useMediaQuery('(max-width:900px)');
    let images = product.items.map(item => item.image_url)
    images.push(product.main_image)
    let sizeChart = product.items.map((item) => { return ({ url: item.image_url.src, size: item.size }) })

    const handleAdd = () => {
        let newQuantity = quantity;
        if (newQuantity < 10) {
            newQuantity += 1;
            setQuantity(newQuantity);
        }
    }

    const handleSub = () => {
        let newQuantity = quantity;
        if (newQuantity > 1) {
            newQuantity -= 1;
            setQuantity(newQuantity);
        }
    }

    const handleAddToCart = () => {

    }



    const handleClick = (i) => {
        setCurrentImageIndex(i);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <motion.div key='landing-page' variants={PageLoadVariant1} initial="initial" animate="animate" exit="exit">
        <Grid style={{ margin: 0 }} container className="product-slider">
            <Grid item md={6} xs={12}>
                <Grid style={{ margin: 0 }} container>
                    {!isMobile && (<Grid item md={4}>
                        <div className='thumbnail-container'>
                            {images.map((image, i) => <div onClick={() => handleClick(i)} key={i} className='thumbnail'><img alt={image.title} src={image.src} /></div>)}
                        </div>
                    </Grid>)}
                    <Grid item xs={12} md={8}>
                        <div className='image-display'>
                            <img src={images[currentImageIndex].src} alt={images[currentImageIndex].title} />
                        </div>
                    </Grid>
                </Grid>
            </Grid>

            <Grid style={{ paddingTop: '5%' }} item md={6} xs={12}>
                <Grid container className='product-content'>
                    <Grid item xs={12}>
                        <div className='title'>{product.name}</div>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace' }} className='title-small'>₹‌{product.selling_price}.00</div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='rating-container'>
                            <StarRatingDisplay rating={4} /><span className='review'>1665 Reviews</span>
                        </div>
                    </Grid>
                    <Grid style={{ marginTop: '1rem' }} item xs={12}>
                        <h1 className='title-small'>ITEMS
                        </h1>
                    </Grid>
                    <Grid style={{ marginBottom: '0.4rem' }} className='size-chart' container >
                        <Grid container>
                            <div className='size-chart-container'>
                                {sizeChart.map((item, i) => <div onClick={() => handleClick(i)} style={{ backgroundImage: `url(${item.url})` }} key={i} className='size-chart-image'></div>)}
                            </div>
                            <div className='size-chart-container'>
                                {sizeChart.map((item, i) => <div onClick={() => handleClick(i)} key={i} className='size-chart-size'>{item.size}</div>)}
                            </div>
                        </Grid>

                        <Grid item xs={12}>

                        </Grid>
                    </Grid>
                    <Grid className='size-chart' container >
                        <Grid style={{ marginBottom: '0.4rem' }} item xs={12}>
                            <h1 className='title-small'>QTY</h1>
                        </Grid>
                        <Grid style={{ marginBottom: '0.5rem' }} container>
                            <QuantityButton handleAdd={handleAdd} handleSub={handleSub} quantity={quantity} />
                        </Grid>
                        <Grid item xs={12}>
                            <button onClick={handleAddToCart} className='primary-button'>
                                ADD TO CART
                            </button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </motion.div>
    );
}

export default ProductDetailsView