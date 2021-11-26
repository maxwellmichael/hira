import { motion } from 'framer-motion'
import { Grid } from '@material-ui/core';
import ProductCard from './sections/clothing/productCard';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { GET_PRODUCTS_BY_FILTERS_FROM_FIRESTORE, GET_CATEGORIES_FROM_FIRESTORE, GET_MATERIALS_FROM_FIRESTORE } from '../../../redux/actions/product.actions';
import FilterCheckBox from './utils/filterCheckBox';
import { PageLoadVariant1 } from '../../../variants/pageLoadVariants';


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
        window.scrollTo(0, 0);
        if (selectedFilters.length === 0) {
            dispatch(GET_CATEGORIES_FROM_FIRESTORE());
            dispatch(GET_MATERIALS_FROM_FIRESTORE());
            dispatch(GET_PRODUCTS_BY_FILTERS_FROM_FIRESTORE())
        }


    }, [dispatch, selectedFilters.length, products])



    return (
        <motion.div key='Product Page' variants={PageLoadVariant1} initial="initial" animate="animate" exit="exit">
            <Grid style={{ margin: 0, padding:0}} container>
                <Grid container>
                    <Grid item xs={12}><div style={{ paddingTop: '1rem' }} className='headline2'>WOMEN</div></Grid>
                    <Grid item xs={12} md={3}>
                        <motion.div transition={{ duration: 0.8 }} initial={{ x: -400 }} animate={{ x: 0 }}>
                            <FilterCheckBox newFilters={filters} />
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={9} style={{ paddingTop: 20 }}>
                        <Grid container alignItems='center' spacing={0} >
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