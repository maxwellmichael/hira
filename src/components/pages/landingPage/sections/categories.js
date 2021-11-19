import { Grid } from '@material-ui/core'
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



const Categories = () => {

    return (
        <Grid container style={{ margin: 0 }}>
            <Grid item xs={12} style={{ margin: 0 }}>
                <div className='landing-page-categories-title'>
                    <h4>WOMEN'S COLLECTION</h4>
                </div>
            </Grid>
            <Grid container>
                <div className='cards-section' >
                    <div className='cards-container'>
                        {categorieSet.map((item, i) => (
                            <div className='scard' key={i} >
                                <img src={item.image} alt={i} />
                                <h4 className='name'>{item.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Categories;