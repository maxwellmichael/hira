import { Grid, IconButton } from "@material-ui/core";
import { useEffect, useState } from "react";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from "react-redux";
import { SET_FILTERS, REMOVE_ALL_FILTERS } from "../../../../redux/actions/filterCheckBox.actions";
import { GET_PRODUCTS_BY_FILTERS_FROM_FIRESTORE } from "../../../../redux/actions/product.actions";
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { BiRefresh } from 'react-icons/bi';


const FilterCheckBox = ({ newFilters, dispatch, selectedFilters }) => {

    const [dropdown, setDropdown] = useState(false);
    let filters = newFilters;
    const initialState = filters.map((filter) => {
        return { name: filter.name, types: [] }
    })

    useEffect(() => {
        if (selectedFilters.length === 0) {
            dispatch(SET_FILTERS([...initialState]));
        }

    }, [dispatch, initialState, selectedFilters, newFilters])

    

    const handleFilterChange = (filter) => {
        const filterIndex = selectedFilters.findIndex(e => e.name === filter.name);
        const types = selectedFilters[filterIndex].types;
        const typeIndex = types.indexOf(filter.type);
        if (typeIndex === -1) {
            let newSelectedFilters = [...selectedFilters];
            newSelectedFilters[filterIndex].types.push(filter.type)
            dispatch(SET_FILTERS(newSelectedFilters))
            return dispatch(GET_PRODUCTS_BY_FILTERS_FROM_FIRESTORE(selectedFilters))
        }
        let newSelectedFilters = [...selectedFilters];
        newSelectedFilters[filterIndex].types.splice(typeIndex, 1)
        dispatch(SET_FILTERS(newSelectedFilters))
        return dispatch(GET_PRODUCTS_BY_FILTERS_FROM_FIRESTORE(selectedFilters))
    }

    const handleChecked = (filter) => {
        if (selectedFilters.length === 0) {
            return false;
        }
        const filterIndex = selectedFilters.findIndex(e => e.name === filter.name);
        const types = selectedFilters[filterIndex].types;
        const typeIndex = types.indexOf(filter.type);
        if (typeIndex === -1) {
            return false;
        }
        return true;

    }


    return (
        <Grid className='filter-checkbox-main' container style={{ margin: 0 }} >

            <Grid className='dropdown-display' container spacing={3}>
                <Grid item xs={6}>
                    <h1 className='title'>FILTERS</h1>
                </Grid>
                <Grid item xs={6}>
                    <IconButton style={{color:'black'}} className='button' size='small' onClick={() => setDropdown(!dropdown)}>{dropdown ? <AiFillCaretUp /> : <AiFillCaretDown />}</IconButton>
                </Grid>
            </Grid>

            <Grid className='dropdown-content' container spacing={3} style={{ display: dropdown ? 'block' : 'none', }}>
                <Grid item xs={12}>
                    <IconButton style={{color:'black'}} size='medium' onClick={() => dispatch(REMOVE_ALL_FILTERS())}>
                        <BiRefresh />
                    </IconButton>
                    {/* <Button onClick={() => dispatch(REMOVE_ALL_FILTERS())} variant='text' style={{ color: '#ff3f6c' }}>CLEAR ALL</Button> */}
                </Grid>

                {filters.map((filter, index) => {
                    return (
                        <Grid key={index} container>
                            <Grid item xs={12}>
                                <h1 style={{ textAlign: 'left', padding: '20px 0px 2px 18px' }} className='content-title'>{filter.name}</h1>
                            </Grid>
                            <Grid item xs={12}>
                                <FormGroup>
                                    {filter.types.map((type, index) => {

                                        return (
                                            <FormControlLabel
                                                key={index}
                                                style={{ paddingLeft: '31px' }}
                                                label={type.name}
                                                control={
                                                    <Checkbox
                                                        checked={handleChecked({ name: filter.name, type: type.id })}
                                                        value={type.name}
                                                        name={type.name}
                                                        sx={{
                                                            color: 'black',
                                                            '&.Mui-checked': {
                                                                color: 'black',
                                                            },
                                                        }}
                                                        size='small'
                                                        onChange={(e) => handleFilterChange({ name: filter.name, type: type.id })}
                                                    />
                                                }
                                            />

                                        );
                                    })}
                                </FormGroup>

                            </Grid>
                        </Grid>
                    )
                })}

            </Grid>


        </Grid>
    )
}

const mapStateToProps = (state) => {

    return ({
        selectedFilters: state.filterCheckBox,
    })
}


export default connect(mapStateToProps)(FilterCheckBox)