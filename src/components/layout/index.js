import Footer from './footer';
import { connect } from 'react-redux';
import Modal from '../utils/modals';
import NavBar from './navbar';


const Layout = ({ modal, children }) => {
    return (

        <div style={{ backgroundColor: '#fff', overflow:'hidden' }} className='layout'>
            {modal.isVisible ? <Modal /> : null}
            <NavBar />
            <div style={{ marginTop: '4rem' }}>
                {children}
            </div>

            <Footer />
        </div>

    )
}
const mapStateToProps = (state) => {

    return ({
        modal: state.modal
    })
}

export default connect(mapStateToProps)(Layout);