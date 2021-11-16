import { motion } from 'framer-motion';
import Caurosel from './sections/caurosel';
import Categories from './sections/categories';
import { Grid } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import MobileBanner from '../../../images/banners/dress-banner-mobile.jpg';
import DesktopBanner from '../../../images/banners/dress-banner-desktop.jpg';

const LandingPage = () => {

    const isMobile = useMediaQuery('(max-width:900px)');

    return (
        <motion.div style={{ backgroundColor: '#fff' }} transition={{ duration: 0.8 }} initial={{ y: 300, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <Grid style={{ margin: 0 }} className='landing-page' container>
                <Caurosel />
                <Grid item xs={12}>
                    <div className="main-title headline5">Online Wholesale Clothing</div>
                </Grid>
                <Categories />
                <Grid style={{ margin: 0 }} container>
                    <div className='section-1'>
                        <div style={{ backgroundImage: `url(${isMobile ? MobileBanner : DesktopBanner})` }} className='image-layer'></div>
                        <div className='overlay'></div>
                        <div className='content-container'>
                            <div className='content headline5'>UP TO 60% OFF</div>
                            <button className='transparent-button'>SHOP NOW</button>
                        </div>

                    </div>
                </Grid>
            </Grid>
        </motion.div>
    )
}

export default LandingPage;