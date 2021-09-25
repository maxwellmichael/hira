import React from "react";
import { useForm } from "react-hook-form";
import { UPDATE_ADDRESS_ON_FIRESTORE } from "../../../../../redux/actions/address.actions";
import {connect} from 'react-redux';
import {HIDE_MODAL} from '../../../../../redux/actions/modal.actions';
import {TextField, Grid, Checkbox} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import {AiTwotoneSave} from 'react-icons/ai';

function EditAddressForm(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    data = {...data, user_id:props.user.uid}
    props.dispatch(HIDE_MODAL());
    props.dispatch(UPDATE_ADDRESS_ON_FIRESTORE(props.address.id, data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
        <Grid item xs={12}><div className='title'>Add New Address</div></Grid>
        <Grid item xs={12}><TextField defaultValue={props.address.name} style={{width:'80%'}} label="Name" {...register("name", { required: true })} /></Grid>
        <Grid item xs={12}><TextField defaultValue={props.address.address} style={{width:'80%'}} label="Address" {...register("address", { required: true })} /></Grid>
        <Grid item xs={12}><TextField defaultValue={props.address.mobile} style={{width:'80%'}} label="Mobile" {...register("mobile", { required: true })} /></Grid>
        <Grid item xs={12}><TextField defaultValue={props.address.state} style={{width:'80%'}} label="Pincode" {...register("pincode", { required: true })} /></Grid>
        <Grid item xs={12}><TextField defaultValue={props.address.state} style={{width:'80%'}} label="State" {...register("state", { required: true })} /></Grid>
        <Grid item xs={12}><TextField defaultValue={props.address.locality} style={{width:'80%'}} label="Locality" {...register("locality", { required: true })} /></Grid>
        <Grid item xs={12}><TextField defaultValue={props.address.district} style={{width:'80%'}} label="District" {...register("district", { required: true })} /></Grid>
        <Grid item xs={12}>
          <FormControlLabel
            value={true}
            control={<Checkbox color="primary" />}
            label="Use this as Default Address"
            labelPlacement="start"
            {...register("defaultAddress", {})}
          />
        </Grid>
       
        
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

export default connect(mapStateToProps)(EditAddressForm);