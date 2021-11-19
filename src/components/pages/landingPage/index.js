import { AnimatePresence, motion } from 'framer-motion';
import { Grid } from '@material-ui/core';
import DesktopBanner from '../../../images/banners/dress-banner-desktop.jpg';
import Banner1 from '../../../images/banners/landing_page_banner.jpg';
import { PageLoadVariant1 } from '../../../variants/pageLoadVariants';
import { ImagesRevealAnimation } from '../../utils/animations/imagesRevealAnimation';

import AnimationVideo from '../../../images/banners/landing-page-video.mp4'
import AnimationImage1 from '../../../images/banners/animation-image-1.jpg';
import AnimationImage2 from '../../../images/banners/animation-image-2.jpg';
import AnimationImage3 from '../../../images/banners/animation-image-3.jpg';
import AnimationImage4 from '../../../images/banners/animation-image-4.jpg';



const LandingPage = () => {

    return (
        <motion.div key='landing-page' style={{ backgroundColor: '#fff' }} variants={PageLoadVariant1} initial="initial" animate="animate" exit="exit">
            <Grid style={{ margin: 0, padding: 0 }} className='landing-page' container>
                <Grid item xs={12}>
                    <div className='landing-banner'>
                        <img alt='Main Banner' src={Banner1} />
                        <div className='center-alignment'>
                            <div style={{ top: '30%' }} className='title headline2'>Women's Collection</div>
                        </div>

                    </div>
                </Grid>


                <Grid style={{ margin: '4rem 0 4rem 0' }} item xs={12}>

                    <motion.div className='title headline1'>Best Of Designs</motion.div>

                    <AnimatePresence>
                        <ImagesRevealAnimation
                            key='animation1'
                            mainImage={AnimationVideo}
                            image1={AnimationImage1}
                            image2={AnimationImage2}
                            image3={AnimationImage3}
                            image4={AnimationImage4}
                        />
                    </AnimatePresence>
                </Grid>

                <Grid item xs={12}>
                    <div className='fixed-banner'>
                        <div style={{ backgroundImage: `url(${DesktopBanner})` }} className='image-layer'></div>
                        <div className='overlay'></div>
                        <div className='content-container'>
                            <div className='title headline3'>Up to 60% Off</div>
                            <button className='transparent-button'>SHOP NOW</button>
                        </div>
                    </div>
                </Grid>

                {/* <Grid style={{marginTop:'4rem'}} item xs={12}>
                    <h2 style={{fontSize:'5.938vw'}}  className='title headline1'>Luxurious and Contemporary Appeal for Every Woman</h2>
                </Grid> */}


            </Grid>
        </motion.div>
    )
}

export default LandingPage;