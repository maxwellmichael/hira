import {Grid} from '@material-ui/core'
import Blouses from '../assets/categories/blouses.webp';
import CropTops from '../assets/categories/crop-tops.webp';
import Bottoms from '../assets/categories/bottoms.webp';
import FloralTops from '../assets/categories/floral-tops.webp';
import LaceTops from '../assets/categories/lace-tops.webp';
import PeplumTops from '../assets/categories/peplum-tops.webp';
import Skirts from '../assets/categories/skirts.webp';
import SolidTops from '../assets/categories/solid-tops.webp';
import StripedTops from '../assets/categories/striped-tops.webp';
import WinterWear from '../assets/categories/winter-wear.webp';
import WrapTops from '../assets/categories/wrap-tops.webp';




const categorieSet = [
    {
        name: 'Blouses',
        image: Blouses
    },
    {
        name: 'Crop Tops',
        image: CropTops
    },
    {
        name: 'Floral Tops',
        image: FloralTops
    },
    {
        name: 'Bottoms',
        image: Bottoms
    },
    {
        name: 'Lace Tops',
        image: LaceTops
    },
    {
        name: 'Skirts',
        image: Skirts
    },

    {
        name: 'Peplum Tops',
        image: PeplumTops
    },
    {
        name: 'Solid Tops',
        image: SolidTops
    },
    {
        name: 'Striped Tops',
        image: StripedTops
    },
    {
        name: 'Winter Wears',
        image: WinterWear
    },
    {
        name: 'Wrap Tops',
        image: WrapTops
    },
    {
        name: 'Skirts',
        image: Skirts
    },
];



const Categories = ()=>{

    return(
        <Grid container spacing={3} style={{width:'100vw',margin:0,overflow:'hidden'}}>

        
            <Grid item xs={12} style={{width:'100vw',margin:0}}>
                <div className='landing-page-categories-title'>
                    <h4>TOP CATEGORIES</h4>
                </div>
            </Grid>
            
            <Grid container spacing={3} style={{margin:0,width:'100%'}}>
                    {categorieSet.map((item, i)=>(
                        <Grid className='landingpage-categories-card' key={i} item xs={6} md={4} lg={2}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <div style={{backgroundImage:`url(${item.image})`}} className='image'></div>
                                </Grid>
                                <Grid item xs={12}>
                                    <h4 className='name'>{item.name}</h4>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
            </Grid>
        </Grid>
    )
}

export default Categories;