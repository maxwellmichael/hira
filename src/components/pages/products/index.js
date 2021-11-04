import { motion } from 'framer-motion'
import { Grid } from '@material-ui/core';
import ProductCard from './sections/clothing/productCard';
//import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { GET_PRODUCTS_BY_FILTERS_FROM_FIRESTORE, GET_CATEGORIES_FROM_FIRESTORE, GET_MATERIALS_FROM_FIRESTORE } from '../../../redux/actions/product.actions';
import FilterCheckBox from './utils/filterCheckBox';


const ClothingPage = ({ dispatch, products, categories, materials, selectedFilters }) => {

    let filters = [
        {
            name: 'CATEGORIES',
            types: categories
        },
        {
            name: 'MATERIALS',
            types: materials
        }
    ]

    useEffect(() => {
        if (selectedFilters.length === 0) {
            dispatch(GET_CATEGORIES_FROM_FIRESTORE());
            dispatch(GET_MATERIALS_FROM_FIRESTORE());
            dispatch(GET_PRODUCTS_BY_FILTERS_FROM_FIRESTORE())
        }


    }, [dispatch, selectedFilters.length, products])



    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.5 }}
            exit={{ x: '-100vw', opacity: 0, transition: { ease: 'easeInOut', duration: 0.6 } }}>
            <Grid container style={{ margin: 0, overflow: 'hidden', }}>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <FilterCheckBox newFilters={filters} />
                    </Grid>
                    <Grid item xs={12} md={9} style={{paddingTop: 20}}>
                        <Grid container justify='space-evenly' >
                            {products.map((product, i) => {
                                if (product instanceof Array || product === null) {
                                    return null;
                                }
                                return <ProductCard product={product} key={i} />
                            })}
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </motion.div>
    )
}

const mapStateToProps = (state) => {

    return ({
        products: state.products.products,
        categories: state.products.categories,
        materials: state.products.materials,
        selectedFilters: state.filterCheckBox,
    })
}


export default connect(mapStateToProps)(ClothingPage);