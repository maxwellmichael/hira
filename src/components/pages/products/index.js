import {motion} from 'framer-motion'
import {Row} from 'react-bootstrap'
import {Grid} from '@material-ui/core';
import FilterDropdown from '../../utils/filterDropdown';
import ProductCard from './clothing/utils/productCard';
//import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { GET_PRODUCTS_FROM_FIRESTORE, REMOVE_ALL_PRODUCTS_FROM_STORE} from '../../../redux/actions/product.actions';



const ClothingPage = ({dispatch, products})=>{


    const [category, setCategory] = useState();

    useEffect(()=>{
        if(category){
            const query = {
                category: category,
            }
            dispatch(REMOVE_ALL_PRODUCTS_FROM_STORE())
            dispatch(GET_PRODUCTS_FROM_FIRESTORE(query))
        }
        else{
            dispatch(REMOVE_ALL_PRODUCTS_FROM_STORE())
            dispatch(GET_PRODUCTS_FROM_FIRESTORE())
        }
        
    },[category, dispatch])

    const handleFilterSelect = (filter, type)=>{
        if(filter){

            if(filter.name==='CATEGORY'){
                setCategory(type)
            }
        }

    }

    //const options = [
    //  'NEWEST', 'FEATURED', 'Price: High to Low', 'Price: Low to High'];
    // const defaultOption = options[0];

    const mensFilters = [
        {
            name:'CATEGORY',
            types:['GOUN', 'CHURITHAR'],
        },
    ];


    return(
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:0.6, delay:0.5}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}}>

            <Grid container>
            
                <Grid item xs={12}>
                    <div className="clothing-title-1">Women's Clothing</div>
                </Grid>

                <Grid container style={{margin:0,padding:0}}>

                    <Grid container style={{position:'sticky',zIndex:2,margin:0,top:0,backgroundColor:'#f8f6f4',borderBottomLeftRadius:12,borderBottomRightRadius:12}}>

                        <Grid container spacing={3} style={{margin:0}}>
                            <Grid item md={6} xs={12}>
                                <div className="clothing-filters">
                                    <Row style={{margin:0}}>
                                        <div style={{paddingLeft:6}} className="clothing-title-3-faded filter-dropdown-heading">FILTERS</div>
                                    </Row>
                                    {mensFilters.map((filter, i)=><FilterDropdown handleFilterSelect={handleFilterSelect} key={i} filter={filter} />)}
                                </div>
                            </Grid>
                        </Grid>
                        
                        {/* <Grid item xs={4}>
                            <Row style={{margin:0}}>
                                <Dropdown className="sort-dropdown" controlClassName="sort-dropdown-control" options={options} value={defaultOption} placeholder="SORT" />
                            </Row>
                        </Grid> */}
                        
                    </Grid>

                    <Grid container spacing={3} style={{margin:0}}>
                        <div className="clothing-card-container">
                            {products.map((product, i)=>{
                                return <ProductCard product={product} key={i} />
                            })}
                        </div>
                    </Grid>

                </Grid>
            
            {/* <Row style={{margin:0, width:'100%'}}>
                <Col xs={12} md={2} style={{marginTop:0,padding:'0px 30px 6px 40px', position:'sticky', height:'500px', top:0, zIndex:2,margin:0}}>
                    <div className="clothing-filters">
                        <Row style={{margin:0}}>
                            <div className="clothing-title-3-faded filter-dropdown-heading">FILTERS</div>
                        </Row>
                        {mensFilters.map((filter, i)=><FilterDropdown handleFilterSelect={handleFilterSelect} key={i} filter={filter} />)}
                    </div>
                </Col>
                <Col xs={12} md={10} style={{padding:0}}>
                    <Row style={{margin:0}}>
                        <Dropdown className="sort-dropdown" controlClassName="sort-dropdown-control" options={options} value={defaultOption} placeholder="SORT" />
                    </Row>
                    <Row style={{margin:'100px 0 0 0'}}>
                        <div className="clothing-card-container">
                            {products.map((product, i)=>{
                                return <ProductCard product={product} key={i} />
                            })}

                        </div>
                    </Row>
                    
                </Col>
            </Row> */}
            
            </Grid>                        
        </motion.div>
    )
}

const mapStateToProps = (state)=>{

    return({
        products: state.products,
    })
}


export default connect(mapStateToProps)(ClothingPage);