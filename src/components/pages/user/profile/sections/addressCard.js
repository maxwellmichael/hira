import {IconButton} from '@material-ui/core';
import { AiTwotoneEdit } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { slideFromBottom } from '../../../../../variants/slideAnimationVariants';



const AddressCard = ({ data }) => {

   
    return (
        <motion.div variants={slideFromBottom}>
            <div className='address-card'>
                <div className='overlay'></div>
                <div className='card-slection'>
                    <IconButton className='circle'>
                        <AiTwotoneEdit />
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