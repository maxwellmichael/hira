import {connect} from 'react-redux';
import { Grid, ButtonGroup, Button } from '@material-ui/core';
import {FaUserAlt} from 'react-icons/fa';
//import { useFirestoreConnect } from "react-redux-firebase";
//import {useSelector} from 'react-redux';
import {SHOW_MODAL} from '../../../../redux/actions/modal.actions';
import {GET_ADDRESS, REMOVE_ADDRESS_FROM_FIRESTORE} from '../../../../redux/actions/address.actions';
import {LOGOUT} from '../../../../redux/actions/user.actions';
import {useEffect} from 'react';
import {ReactComponent as DefaultUserLogo} from '../../../../images/icons/default_user.svg';
import {RiDeleteBin5Line, RiEditLine} from 'react-icons/ri';
import { GET_ORDERS_FROM_FIRESTORE } from '../../../../redux/actions/orders.actions';

const Profile = ({dispatch, user, address, orders})=>{

    useEffect(()=>{
        if(user){
            dispatch(GET_ADDRESS());
            dispatch(GET_ORDERS_FROM_FIRESTORE());
        }
    },[user, dispatch])


    return(
        <div className='profile-main' style={{overflow:'hidden'}}>
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
                            <div className='value'>{orders ? orders.length:0}</div>
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
                {user && <Button onClick={()=>dispatch(LOGOUT())} variant="contained">Logout</Button>}
                </Grid>
                <Grid item xs={12}>
                    <div className='profile-title'>
                        <h1>Saved Address</h1>
                    </div>
                    <Grid item xs={12}>
                        <Button onClick={()=>dispatch(SHOW_MODAL('ADDRESS_FORM',{}))} variant="outlined">Add</Button>
                    </Grid>
                    <Grid container>
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
                                    <ButtonGroup style={{margin:'auto', width: '100%'}} aria-label="outlined primary button group">
                                        <Button style={{backgroundColor:'#e0e0e0'}} onClick={()=>dispatch(SHOW_MODAL('EDIT_ADDRESS_FORM',item))}><RiEditLine/></Button>
                                        <Button style={{backgroundColor:'#f44336'}} onClick={()=>dispatch(REMOVE_ADDRESS_FROM_FIRESTORE(item.id))}><RiDeleteBin5Line/></Button>
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
        orders: state.orders,
    })
}

export default connect(mapStateToProps)(Profile);