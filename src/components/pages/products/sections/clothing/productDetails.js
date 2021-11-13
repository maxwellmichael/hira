import {Grid} from '@material-ui/core';
//import ImageGallery from 'react-image-gallery';
const ProductDetailsView = (props)=>{

    //const images = props.images.map(image=>{return {original:image,thumbnail:image}})
    console.log(props.location)
    return(
        <Grid container spacing={3} className="product-details">
            <Grid item xs={12} md={7}>
               <h1>Hello World</h1>
            </Grid>
        </Grid>
    );
}

export default ProductDetailsView