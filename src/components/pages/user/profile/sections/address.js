import { Grid, IconButton } from '@material-ui/core';
import {IoMdAdd} from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux';
import AddressCard from './addressCard';
import { useEffect } from 'react';
import { GET_ADDRESS } from '../../../../../redux/actions/address.actions';
import { SHOW_MODAL } from '../../../../../redux/actions/modal.actions';

const Address = () => {
    const addresses = useSelector((state) => state.address)
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(user){
            dispatch(GET_ADDRESS());
        }
    },[user, dispatch])

    return (
        <Grid container direction='row' spacing={4}>
            <Grid item xs={12}>
                <IconButton onClick={()=>dispatch(SHOW_MODAL('ADDRESS_FORM',{}))} style={{backgroundColor:'black', color:'white'}}><IoMdAdd/></IconButton>
            </Grid>
            {addresses.map((address, i) => (
                <Grid key={i} item xs={12}>
                    <AddressCard data={address} />
                </Grid>
            ))}
        </Grid>
    )
}



export default Address;