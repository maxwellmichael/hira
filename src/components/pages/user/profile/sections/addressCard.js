import {IconButton} from '@material-ui/core';
import { AiTwotoneEdit } from 'react-icons/ai';
import {RiDeleteBack2Line} from 'react-icons/ri';
import { motion } from 'framer-motion';
import { slideFromBottom } from '../../../../../variants/slideAnimationVariants';
import { useDispatch } from 'react-redux';
import { SHOW_MODAL } from '../../../../../redux/actions/modal.actions';
import { REMOVE_ADDRESS_FROM_FIRESTORE } from '../../../../../redux/actions/address.actions';


const AddressCard = ({ data }) => {

    const dispatch = useDispatch();
   
    return (
        <motion.div variants={slideFromBottom}>
            <div className='address-card'>
                <div className='overlay'></div>
                <div className='card-slection'>
                    <IconButton onClick={()=>dispatch(SHOW_MODAL('EDIT_ADDRESS_FORM',data))} className='circle'>
                        <AiTwotoneEdit />
                    </IconButton>
                    <IconButton onClick={()=>dispatch(REMOVE_ADDRESS_FROM_FIRESTORE(data.id))} className='circle-red'>
                        <RiDeleteBack2Line />
                    </IconButton>
                    
                </div>

                <div className='card-content'>
                    <h6 className='subtitle2'>{data.address}</h6>
                    <h6 className='subtitle3'>Pincode: <span style={{ fontWeight: 'bold' }}>{data.pincode}</span></h6>
                    <h6 className='subtitle3'>State: <span style={{ fontWeight: 'bold' }}>{data.state}</span></h6>
                    <h6 className='subtitle3'>District: <span style={{ fontWeight: 'bold' }}>{data.district}</span></h6>
                    <h6 className='subtitle3'>Locality: <span style={{ fontWeight: 'bold' }}>{data.locality}</span></h6>
                </div>
            </div>
        </motion.div>
    )
}



export default AddressCard;