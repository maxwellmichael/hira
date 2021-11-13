import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { TextField, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';



const ForgotPassword = (props) => {
  const { handleSubmit, register, formState: { errors } } = useForm();


  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Grid style={{ margin: 0, overflow: 'hidden' }} container>
      <form className='form-main' onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid xs={12} item>
            <div className='title'>RESET PASSWORD</div>
            <div className='subtitle2'>Please enter your email address below to get an email to reset your password.</div>
          </Grid>
          <Grid item xs={12}>
            <TextField style={{ width: '100%' }} label="Email" {...register("email")} />
            {errors.email && <span>This field is required</span>}
          </Grid>
         
          <Grid item xs={12}>
            <button style={{marginBottom:'1rem'}} type='submit' className='form-button1'>SUBMIT</button>
            <div className='subtitle2'>
                <Link style={{ color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none' }} to='/user/login'>Cancel</Link>
            </div>
          </Grid>
          
        </Grid>
      </form>
    </Grid>
  );
};


export default connect()(ForgotPassword);