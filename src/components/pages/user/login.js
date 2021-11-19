import React from 'react';
import { useForm } from 'react-hook-form';
import { LOGIN, LOGIN_WITH_GOOGLE } from '../../../redux/actions/user.actions';
import { connect } from 'react-redux';
import { TextField, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { auth } from '../../../firebase/authServices';
import { motion } from 'framer-motion';
import { PageLoadVariant1 } from '../../../variants/pageLoadVariants';



const LogIn = ({ dispatch, history }) => {

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        history.push('/')
      }
    });
    return () => unsubscribe();
  }, [history])

  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = handleSubmit((data) => {
    dispatch(LOGIN(data.email, data.password));
  });

  return (
    <motion.div key='login-page' variant={PageLoadVariant1} initial="initial" animate="animate" exit="exit">
      <Grid style={{ margin: 0, overflow: 'hidden' }} container>
        <form className='form-main' onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            <Grid xs={12} item>
              <div className='title'>Login</div>
            </Grid>
            <Grid item xs={12}>
              <TextField style={{ width: '100%' }} label="Email" {...register("email")} />
              {errors.email && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField style={{ width: '100%' }} type='password' label="Password" {...register("password")} />
              {errors.password && <span>This field is required</span>}
              <div style={{ textAlign: 'right' }} className='subtitle2'>
                <Link style={{ color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none' }} to='/user/recover'>Forgot password</Link>
              </div>
            </Grid>
            <Grid item xs={12}>
              <button type='submit' className='form-button1'>LOGIN</button>
            </Grid>
            <Grid item xs={12}>
              <div className='subtitle1'>Don't have an account?</div>
              <button className='form-button2'>
                <Link style={{ color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none' }} to='/user/register'>CREATE AN ACCOUNT</Link>
              </button>
            </Grid>
            <Grid item xs={12}>
              <div onClick={() => dispatch(LOGIN_WITH_GOOGLE())} className="google-btn">
                <div className="google-icon-wrapper">
                  <img alt='sign in with google' className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                </div>
                <p className="btn-text"><b>Sign in with google</b></p>
              </div>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </motion.div>
  );
};

export default connect()(withRouter(LogIn));