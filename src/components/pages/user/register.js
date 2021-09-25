import React from 'react';
import { useForm } from 'react-hook-form';
import {REGISTER, LOGIN_WITH_GOOGLE} from '../../../redux/actions/user.actions';
import {connect} from 'react-redux';
import {TextField, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {FaGoogle} from 'react-icons/fa';


const Register = (props) => {
  const { handleSubmit, register, formState: { errors } } = useForm();


  const onSubmit = handleSubmit((data) => {
    console.log(data);
    props.dispatch(REGISTER(data.email, data.password, data.name));
  });

  return (
    <form className='form-main' onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid xs={12} item><div className='title'>Register</div></Grid>
        <Grid item xs={12}><TextField style={{width:'80%'}} label="Name" {...register("name")} /></Grid>
        <Grid item xs={12}><TextField style={{width:'80%'}} label="Email" {...register("email")} /></Grid>
        <Grid item xs={12}><TextField style={{width:'80%'}} type='password' label="Password" {...register("password")} />
        </Grid>

        {/*<input placeholder='email' type='text' name='email' {...register("email")} />
        
        <input placeholder='password' type='password' name='password' {...register("password", { required: true })} />*/}
        <Grid item xs={12}>{errors.exampleRequired && <span>This field is required</span>}</Grid>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button type='submit' variant="contained" color="primary">
              Register
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button type='submit' variant="contained" color="primary">
              <Link style={{color:'rgba(0, 0, 0, 0.87)',textDecoration:'none'}} to='/user/login'>Login</Link>
            </Button>
          </Grid>
          
        </Grid>
        <Grid item xs={12}>
          <Button onClick={()=>props.dispatch(LOGIN_WITH_GOOGLE())} variant="contained" color="primary" startIcon={<FaGoogle />}>
            Login With Google
          </Button>
        </Grid>
        
      </Grid>
    </form>
  );
};


export default connect()(Register);