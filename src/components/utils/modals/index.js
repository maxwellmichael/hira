import {Button} from '@material-ui/core';
import AddressForm from './sections/address/AddAddressForm';
import EditAddressForm from './sections/address/EditAddressForm';
import {GrFormClose} from 'react-icons/gr';
import {connect} from 'react-redux';
import {motion} from 'framer-motion';
import { HIDE_MODAL } from '../../../redux/actions/modal.actions';


const Modal = (props)=>{


    const displayModalType = (type, data)=>{
        switch(type){

            case 'ADDRESS_FORM':
                return <AddressForm />;
            case 'EDIT_ADDRESS_FORM':
                return <EditAddressForm address={data} />;
            default:
                return 'Unknown';
        }
    }


    return(
        <motion.div className='nmodal'>
            
            <div className='headder'>
                <Button onClick={()=>props.dispatch(HIDE_MODAL())} variant="contained" style={{backgroundColor: '#f44336', width: 70, float:'right'}}>
                    <GrFormClose style={{width: 30, height:30}} />
                </Button>
            </div>
            <div className='content'>
                {displayModalType(props.modal.type, props.modal.data)}
            </div>
        </motion.div>
    )
} 

const mapStateToProps = (state)=>{

    return({
        modal: state.modal,
    })
}

export default connect(mapStateToProps)(Modal);