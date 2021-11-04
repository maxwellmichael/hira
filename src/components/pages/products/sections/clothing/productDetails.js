import {Grid} from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
const ProductDetailsView = (props)=>{

    const images = props.images.map(image=>{return {original:image,thumbnail:image}})

    return(
        <Grid container spacing={3} className="product-details">
            <Grid item xs={12} md={7}>
                <ImageGallery items={images} />
            </Grid>
        </Grid>
    );
}

export default ProductDetailsView