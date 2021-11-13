import React from "react";
import { useForm, Controller } from "react-hook-form";
import { UPDATE_ADDRESS_ON_FIRESTORE } from "../../../../../redux/actions/address.actions";
import { connect } from 'react-redux';
import { HIDE_MODAL } from '../../../../../redux/actions/modal.actions';
import { TextField, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { AiTwotoneSave } from 'react-icons/ai';

function EditAddressForm(props) {
  console.log(props.address)
  const { handleSubmit, formState: { errors }, unregister, control } = useForm({
    defaultValues: {
      name: props.address.name,
      address: props.address.address,
      mobile: props.address.mobile,
      pincode: props.address.pincode,
      state: props.address.state,
      locality: props.address.locality,
      district: props.address.district,
    }
  });
  const onSubmit = data => {
    unregister('name');
    unregister('address');
    unregister('mobile');
    unregister('pincode');
    unregister('state');
    unregister('locality');
    unregister('district');
    data = { ...data, user_id: props.user.uid }
    props.dispatch(HIDE_MODAL());
    props.dispatch(UPDATE_ADDRESS_ON_FIRESTORE(props.address.id, data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className='title'>Edit Shipping Address</div>
          <hr style={{ width: '100%', marginTop: '-8px' }} className='center-ball'></hr>
        </Grid>
        <Grid item xs={12}>
          <Controller control={control} name="name" render={({ field }) => <TextField label='Name' style={{ width: '100%' }} {...field} />} />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </Grid>
        <Grid item xs={12}>
          <Controller control={control} name="address" render={({ field }) => <TextField label='Address' style={{ width: '100%' }} {...field} />} />
          {errors.address && <p style={{ color: 'red' }}>{errors.address.message}</p>}
        </Grid>
        <Grid item xs={12}>
          <Controller control={control} name="mobile" render={({ field }) => <TextField label='Mobile' style={{ width: '100%' }} {...field} />} />
          {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile.message}</p>}
        </Grid>
        <Grid item xs={12}>
          <Controller control={control} name="pincode" render={({ field }) => <TextField label='Pincode' style={{ width: '100%' }} {...field} />} />
          {errors.pincode && <p style={{ color: 'red' }}>{errors.pincode.message}</p>}
        </Grid>
        <Grid item xs={12}>
          <Controller control={control} name="state" render={({ field }) => <TextField label='State' style={{ width: '100%' }} {...field} />} />
          {errors.state && <p style={{ color: 'red' }}>{errors.state.message}</p>}
        </Grid>
        <Grid item xs={12}>
          <Controller control={control} name="locality" render={({ field }) => <TextField label='Locality' style={{ width: '100%' }} {...field} />} />
          {errors.locality && <p style={{ color: 'red' }}>{errors.locality.message}</p>}
        </Grid>
        <Grid item xs={12}>
          <Controller control={control} name="district" render={({ field }) => <TextField label='District' style={{ width: '100%' }} {...field} />} />
          {errors.district && <p style={{ color: 'red' }}>{errors.district.message}</p>}
        </Grid>

        <Grid item xs={12}>
          <Button disableElevation style={{ float: 'right' }} startIcon={<AiTwotoneSave />} type='submit' variant="contained" color="secondary">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

const mapStateToProps = (state) => {

  return ({
    user: state.user,
  })
}

export default connect(mapStateToProps)(EditAddressForm);