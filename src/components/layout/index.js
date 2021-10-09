import Footer from './footer';
import {connect} from 'react-redux';
import { LOGIN_SUCCESS } from '../../redux/actions/user.actions';
import { GET_CART_FROM_FIRESTORE } from '../../redux/actions/cart.actions';
import Modal from '../utils/modals';
import NavBar from './navbar';
import {useEffect} from 'react';
import { auth } from '../../firebase/authServices';
import { getUserWithUID } from '../../services/user';

const Layout = ({dispatch,modal,children})=>{
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(async(user) => { 
            if (user) {
                const response = await getUserWithUID(user.uid);
                if(response.hasError){
                    console.log(response.error)
                }
                dispatch(LOGIN_SUCCESS(response.data));
                dispatch(GET_CART_FROM_FIRESTORE());
            } 
            else {
                console.log('Not Logged In')
            }
        });
        return () => unsubscribe(); 
    },[dispatch])
    return(
        <div style={{backgroundColor:'#f8f6f4'}} className='layout'>
            {modal.isVisible?<Modal />:null}
            <NavBar/>
            {children}
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state)=>{

    return({
        modal: state.modal
    })
}

export default connect(mapStateToProps)(Layout);