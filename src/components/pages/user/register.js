import React from 'react';
import { useForm } from 'react-hook-form';
import { REGISTER } from '../../../redux/actions/user.actions';
import { connect } from 'react-redux';
import { TextField, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageLoadVariant1 } from '../../../variants/pageLoadVariants';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  name: yup.string().min(4, 'Name must be atleast 4 characters in length.').required(),
  email: yup.string().required(),
  password: yup.string()
    .required("Please enter a password")
    .min(8, "Password must have a minimum of 8 characters.")
    .matches(/(?=.*[0-9])/, "Password must contain a number."),
  confirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords do not match'),

}).required();

const Register = (props) => {
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  const onSubmit = handleSubmit((data) => {
    props.dispatch(REGISTER(data.email, data.password, data.name));
  });

  return (
    <motion.div variant={PageLoadVariant1} initial="initial" animate="animate" exit="exit">
      <Grid style={{ margin: 0, overflow: 'hidden' }} container>
        <form className='form-main' onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            <Grid xs={12} item><div className='title1'>Register</div></Grid>
            <Grid item xs={12}>
              <TextField style={{ width: '100%' }} type='string' label="Name" {...register("name")} />
              {errors.name && <span className='error'>{errors.name.message}</span>}
            </Grid>

            <Grid item xs={12}>
              <TextField style={{ width: '100%' }} type='email' label="Email" {...register("email")} />
              {errors.email && <span className='error'>{errors.email.message}</span>}
            </Grid>

            <Grid item xs={12}>
              <TextField style={{ width: '100%' }} type='password' label="Password" {...register("password")} />
              {errors.password && <span className='error'>{errors.password.message}</span>}

            </Grid>

            <Grid item xs={12}>
              <TextField style={{ width: '100%' }} type='password' label="Confirm Password" {...register("confirm")} />
              {errors.confirm && <span className='error'>{errors.confirm.message}</span>}
            </Grid>

            <Grid item xs={12}>
              <button className='form-button1' type='submit'>CREATE ACCOUNT</button>
            </Grid>

            <Grid item xs={12}>
              <div className='subtitle1'>Already have an account?</div>
              <div className='form-button2'>
                <Link style={{ color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none' }} to='/user/login'>LOGIN</Link>
              </div>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </motion.div>
  );
};


export default connect()(Register);