import { Grid, IconButton, Button } from '@material-ui/core';
import { FaUserAlt } from 'react-icons/fa';
import {BiArrowBack, BiCheck} from 'react-icons/bi'
import { ReactComponent as DefaultUserLogo } from '../../../../../images/icons/default_user.svg';
import { useSelector } from 'react-redux';
import { AiTwotoneEdit } from 'react-icons/ai';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    defaultButton:{
        backgroundColor: 'black',
        color: 'white',
        border: '1px solid black',
        borderRadius: 1,
        fontFamily: 'prompt',
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize: '0.6rem',
        lineHeight: '4px',
        letterSpacing: '0.2rem',
        '&:hover': {
            background: "white",
            color: 'black',
         },
    },
    transparentButton:{
        backgroundColor: 'transparent',
        color: 'black',
        border: 0,
        borderRadius: 1,
        fontFamily: 'prompt',
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize: '0.6rem',
        lineHeight: '4px',
        letterSpacing: '0.2rem',
        '&:hover': {
            background: "transparent",
            color: 'black',
         },
    }
  });


const Account = () => {
    const classes = useStyles();
    const user = useSelector((state) => state.user)
    const [editButtonsVisible, setEditButtons] = useState(false);

    const handleEditButtonToggle = () => {
        setEditButtons(!editButtonsVisible);
    }
    return (
        <Grid container>
            <Grid style={{ margin: 0 }} className='account-section1' container spacing={3}>
                <Grid item xs={6}>
                    <div className='account-image'>
                        {user ? <img alt='user' src={user.profilePhoto ? user.profilePhoto : <DefaultUserLogo />} /> : <FaUserAlt />}
                    </div>
                    {editButtonsVisible && (<IconButton size='small' className='account-image-edit' style={{ backgroundColor: 'black', color: 'white' }}>
                        <AiTwotoneEdit />
                    </IconButton>)}
                </Grid>
                <Grid item xs={6}>
                    {!editButtonsVisible && (<button onClick={handleEditButtonToggle} className='account-edit-button'>Edit Account</button>)}
                </Grid>
            </Grid>
            <Grid style={{ margin: '80px 0 0 0' }} className='account-section2' container spacing={3}>
                <Grid item xs={12}>
                    {!editButtonsVisible && <div className='headline3'>{user.userName}</div>}
                </Grid>
            </Grid>
            <Grid className='account-section2' container spacing={3} direction="row"
                alignItems="flex-start">

                <Grid item xs={12}>
                    {editButtonsVisible && <div style={{ textAlign: 'left' }} className='subtitle2'>Full Name</div>}
                    {editButtonsVisible && (
                        <input type='text' placeholder={user.userName} name='name' className='edit-input' />
                    )}
                </Grid>

                <Grid item xs={12}>
                    <div style={{ textAlign: 'left' }} className='subtitle2'>E-mail</div>
                    {!editButtonsVisible && <div style={{ textAlign: 'left' }} className='headline6'>{user.email}</div>}
                    {editButtonsVisible && (
                        <input style={{ float: 'left' }} type='text' placeholder={user.email} name='email' className='edit-input' />
                    )}
                </Grid>
                <Grid item xs={12}>
                    <div style={{ textAlign: 'left' }} className='subtitle2'>Phone</div>
                    {!editButtonsVisible && <div style={{ textAlign: 'left' }} className='headline6'>+91 7456602787</div>}
                    {editButtonsVisible && (
                        <input style={{ float: 'left' }} type='text' placeholder='+91 7456602787' name='phone' className='edit-input' />
                    )}
                </Grid>

                {editButtonsVisible && (<Grid style={{marginTop:40}} container spacing={6}>
                    <Grid item xs={6}>
                        <Button onClick={handleEditButtonToggle} disableElevation className={classes.transparentButton} startIcon={<BiArrowBack/>}>Back to Profile</Button>
                    </Grid>

                    <Grid item xs={6}>
                        <Button disableElevation className={classes.defaultButton} startIcon={<BiCheck/>}>Update Profile</Button>
                    </Grid>

                </Grid>)}

            </Grid>
        </Grid>
    )
}



export default Account;