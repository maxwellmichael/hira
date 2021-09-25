import {connect} from 'react-redux';
import { Grid, ButtonGroup, Button } from '@material-ui/core';
import {FaUserAlt} from 'react-icons/fa';
//import { useFirestoreConnect } from "react-redux-firebase";
//import {useSelector} from 'react-redux';
import {SHOW_MODAL} from '../../../redux/actions/modal.actions';
import {GET_ADDRESS, REMOVE_ADDRESS_FROM_FIRESTORE} from '../../../redux/actions/address.actions';
import {LOGOUT} from '../../../redux/actions/user.actions';
import {useEffect} from 'react';
import {ReactComponent as DefaultUserLogo} from '../../../images/icons/default_user.svg';

const Profile = ({dispatch, user, address})=>{

    useEffect(()=>{
        if(user){
            dispatch(GET_ADDRESS(user.uid));
        }
    },[user, dispatch])

    console.log(address)
    // useFirestoreConnect({
    //     collection: `users`,
    // });
    // const address = useSelector((state)=>state.firestore.data.address)
    // console.log('address', address)

    return(
        <div className='profile-main'>
            <Grid container spacing={2}>
            
                <Grid item xs={12}> 
                    <div className='profile-icon'>
                        {user?<img alt='user' src={user.profilePhoto?user.profilePhoto:<DefaultUserLogo/>} />:<FaUserAlt />}
                    </div>
                    <div className='profile-name'>
                        <h1>{user?user.displayName:'Loading..'}</h1>
                    </div>
                    <div className='profile-stats'>
                        <div className='stat-item'>
                            <div className='value'>12</div>
                            <p>Orders</p>
                        </div>
                        <div className='stat-item'>
                            <div className='value'>4</div>
                            <p>Cancelled</p>
                        </div>
                        <div className='stat-item'>
                            <div className='value'>7000</div>
                            <p>Total</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                {user && <Button color='error' onClick={()=>dispatch(LOGOUT())} variant="contained">Logout</Button>}
                </Grid>
                <Grid item xs={12}>
                    <div className='profile-title'>
                        <h1>Saved Address</h1>
                    </div>
                    <Grid item xs={12}>
                        <Button onClick={()=>dispatch(SHOW_MODAL('ADDRESS_FORM',{}))} variant="outlined">Add</Button>
                    </Grid>
                    <Grid container xs={12}>
                        {address.map((item, i)=>{
                            return(
                                <div key={i} className='profile-address'>
                                    <div className='address-name'>
                                        {item.name}
                                    </div>

                                    <p>{item.address}</p>
                                    <p>{item.district} - {item.pincode}</p>
                                    <p>{item.state}</p>
                                    <p>Mobile: {item.mobile}</p>
                                    <ButtonGroup style={{margin:'auto', width: '100%'}} color="primary" aria-label="outlined primary button group">
                                        <Button onClick={()=>dispatch(SHOW_MODAL('EDIT_ADDRESS_FORM',item))}>Edit</Button>
                                        <Button onClick={()=>dispatch(REMOVE_ADDRESS_FROM_FIRESTORE(item.id))}>Remove</Button>
                                    </ButtonGroup>
                                </div>
                            )
                        })}
                        

                    </Grid>
                </Grid>

            </Grid>

        </div>
    )
}

const mapStateToProps = (state)=>{

    return({
        user: state.user,
        address: state.address,
    })
}

export default connect(mapStateToProps)(Profile);