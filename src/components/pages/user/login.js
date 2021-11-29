import React from 'react';
import { useForm } from 'react-hook-form';
import { LOGIN, LOGIN_WITH_GOOGLE } from '../../../redux/actions/user.actions';
import { connect } from 'react-redux';
import { TextField, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { auth } from '../../../firebase/authServices';
import { ReactComponent as GoogleLogo } from '../../../images/icons/google_logo.svg';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


const schema = yup.object({
 
  email: yup.string().required(),
  password: yup.string()
    .required("Please enter a password")
    .min(8, "Password must have a minimum of 8 characters.")
    .matches(/(?=.*[0-9])/, "Password must contain a number."),
}).required();


const LogIn = ({ dispatch, history }) => {

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        history.push('/')
      }
    });
    return () => unsubscribe();
  }, [history])

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


const { handleSubmit, register, formState: { errors } } = useForm({resolver: yupResolver(schema)});
  const onSubmit = handleSubmit((data) => {
    dispatch(LOGIN(data.email, data.password));
  });

  return (
      <Grid style={{ margin: 0, overflow: 'hidden' }} container>
        <form className='form-main' onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            <Grid xs={12} item>
              <div className='title1'>Login</div>
            </Grid>
            <Grid item xs={12}>
              <TextField type='email' style={{ width: '100%' }} label="Email" {...register("email")} />
              {errors.email && <span className='error'>{errors.email.message}</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField style={{ width: '100%' }} type='password' label="Password" {...register("password")} />
              {errors.password && <span className='error'>{errors.password.message}</span>}

              <div style={{ textAlign: 'right' }} className='subtitle2'>
                <Link style={{ color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none' }} to='/user/recover'>Forgot password</Link>
              </div>
            </Grid>
            <Grid item xs={12}>
              <button type='submit' className='form-button1'>LOGIN</button>
            </Grid>
            <Grid item xs={12}>
              <div className='subtitle1'>Don't have an account?</div>
              <div className='form-button2'>
                <Link style={{ color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none' }} to='/user/register'>CREATE AN ACCOUNT</Link>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div onClick={() => dispatch(LOGIN_WITH_GOOGLE())} className="google-btn">
                <div className="google-icon-wrapper">
                  <GoogleLogo  className="google-icon"/>
                </div>
                <p className="btn-text"><b>Sign in with google</b></p>
              </div>
            </Grid>
          </Grid>
        </form>
      </Grid>
  );
};

export default connect()(withRouter(LogIn));