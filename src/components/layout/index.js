import Footer from './footer';
import {connect} from 'react-redux';
import { UPDATE_USER } from '../../redux/actions/user.actions';
import Modal from '../utils/modals';
import NavBar from './navbar';

const Layout = (props)=>{
    props.dispatch(UPDATE_USER())
    return(
        <div style={{backgroundColor:'#f8f6f4'}} className='layout'>
            {props.modal.isVisible?<Modal />:null}
            <NavBar/>
            {props.children}
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