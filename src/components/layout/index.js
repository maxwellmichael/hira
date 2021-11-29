import Footer from './footer';
import { connect } from 'react-redux';
import Modal from '../utils/modals';
import NavBar from './navbar';
import LoadingView from '../utils/loadingView';

const Layout = ({ modal, loader, children }) => {
    return (
        <div style={{ backgroundColor: '#fff', overflow:'hidden' }} className='layout'>
            {modal.isVisible ? <Modal /> : null}
            {loader.isVisible ? <LoadingView value={loader.value} /> : null}
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
        modal: state.modal,
        loader: state.loader,
    })
}

export default connect(mapStateToProps)(Layout);