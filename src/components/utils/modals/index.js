import {IconButton } from '@material-ui/core';
import AddressForm from './sections/address/AddAddressForm';
import EditAddressForm from './sections/address/EditAddressForm';
import { GrFormClose } from 'react-icons/gr';
import { connect } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { HIDE_MODAL } from '../../../redux/actions/modal.actions';
import { slideFromBottom } from '../../../variants/slideAnimationVariants';

const Modal = (props) => {


    const displayModalType = (type, data) => {
        switch (type) {

            case 'ADDRESS_FORM':
                return <AddressForm />;
            case 'EDIT_ADDRESS_FORM':
                return <EditAddressForm address={data} />;
            default:
                return 'Unknown';
        }
    }


    return (
        <AnimatePresence exitBeforeEnter>
            {props.modal.isVisible && (
                <motion.div className='nmodal-container' exit={'exit'} variants={slideFromBottom} transition={'transition'} initial={'initial'} animate={'animate'}>
                    <div className='nmodal'>
                        <div className='close-button'>
                            <IconButton
                                onClick={() => props.dispatch(HIDE_MODAL())}
                                size='small'
                                style={{
                                    backgroundColor: '#f44336',
                                    borderRadius: '100%',
                                    float:'right',
                                }}>
                                <GrFormClose style={{ width: 30, height: 30 }} />
                            </IconButton>
                        </div>
                        <div className='content'>
                            {displayModalType(props.modal.type, props.modal.data)}
                        </div>
                    </div>
                </motion.div>
            )}

        </AnimatePresence>
    )
}

const mapStateToProps = (state) => {

    return ({
        modal: state.modal,
    })
}

export default connect(mapStateToProps)(Modal);