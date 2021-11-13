import React from 'react';
import { useForm } from 'react-hook-form';
import { REGISTER } from '../../../redux/actions/user.actions';
import { connect } from 'react-redux';
import { TextField, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Register = (props) => {
  const { handleSubmit, register, formState: { errors } } = useForm();


  const onSubmit = handleSubmit((data) => {
    props.dispatch(REGISTER(data.email, data.password, data.name));
  });

  return (
    <Grid style={{ margin: 0, overflow: 'hidden' }} container>
      <form className='form-main' onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid xs={12} item><div className='title'>Register</div></Grid>
          <Grid item xs={12}><TextField style={{ width: '100%' }} label="Name" {...register("name")} /></Grid>
          <Grid item xs={12}><TextField style={{ width: '100%' }} label="Email" {...register("email")} /></Grid>
          <Grid item xs={12}><TextField style={{ width: '100%' }} type='password' label="Password" {...register("password")} /></Grid>
          <Grid item xs={12}><TextField style={{ width: '100%' }} type='password' label="Confirm Password" {...register("confirm")} /></Grid>
          <Grid item xs={12}>{errors.exampleRequired && <span>This field is required</span>}</Grid>
          <Grid item xs={12}>
            <button className='form-button1' type='submit'>CREATE ACCOUNT</button>
          </Grid>
          <Grid item xs={12}>
            <div className='subtitle1'>Already have an account?</div>
            <button className='form-button2'>
              <Link style={{ color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none' }} to='/user/login'>LOGIN</Link>
            </button>
          </Grid>
        </Grid>
      </form>
    </Grid>

  );
};


export default connect()(Register);