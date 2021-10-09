import React from "react";
import { useForm } from "react-hook-form";
import { ADD_ADDRESS_TO_FIRESTORE } from "../../../../../redux/actions/address.actions";
import {connect} from 'react-redux';
import {TextField, Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {AiTwotoneSave} from 'react-icons/ai';
import {HIDE_MODAL} from '../../../../../redux/actions/modal.actions';

function AddressForm(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    data = {...data, user_id:props.user.uid}
    props.dispatch(HIDE_MODAL());
    props.dispatch(ADD_ADDRESS_TO_FIRESTORE(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}><div className='title'>Add New Shipping Address</div></Grid>
        <Grid item xs={12}><TextField style={{width:'100%'}} label="Name" {...register("name", { required: true })} /></Grid>
        <Grid item xs={12}><TextField style={{width:'100%'}} label="Address" {...register("address", { required: true })} /></Grid>
        <Grid item xs={12}><TextField style={{width:'100%'}} label="Mobile" {...register("mobile", { required: true })} /></Grid>
        <Grid item xs={12}><TextField style={{width:'100%'}} label="Pincode" {...register("pincode", { required: true })} /></Grid>
        <Grid item xs={12}><TextField style={{width:'100%'}} label="State" {...register("state", { required: true })} /></Grid>
        <Grid item xs={12}><TextField style={{width:'100%'}} label="Locality" {...register("locality", { required: true })} /></Grid>
        <Grid item xs={12}><TextField style={{width:'100%'}} label="District" {...register("district", { required: true })} /></Grid>
        <Grid item xs={12}>
          <Button startIcon={<AiTwotoneSave />} type='submit' variant="contained" color="primary">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

const mapStateToProps = (state)=>{

  return({
    user: state.user,
  })
}

export default connect(mapStateToProps)(AddressForm);