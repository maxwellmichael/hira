import { Grid, IconButton } from '@material-ui/core';
import { FaUserAlt } from 'react-icons/fa';
import { ReactComponent as DefaultUserLogo } from '../../../../../images/icons/default_user.svg';
import { useSelector } from 'react-redux';
import { AiTwotoneEdit } from 'react-icons/ai';
import { useState } from 'react';

const Account = () => {
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
                    <button onClick={handleEditButtonToggle} className='account-edit-button'>Edit Account</button>
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

            </Grid>
        </Grid>
    )
}



export default Account;