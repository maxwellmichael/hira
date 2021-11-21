import { AnimatePresence, motion } from 'framer-motion';
import { Grid } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

import { PageLoadVariant1 } from '../../../variants/pageLoadVariants';
import { ImagesRevealAnimation, ImageInfiniteSlider } from '../../utils/animations/imagesRevealAnimation';
import { RevealFromBottom } from '../../utils/animations/contentRevealAnimations';

import DesktopBanner from '../../../images/banners/dress-banner-desktop.webp';
import Banner1 from '../../../images/banners/landing_page_banner.webp';

import AnimationVideo from '../../../images/banners/landing-page-video.mp4'
import AnimationVideoMobile from '../../../images/banners/landing-page-video-mobile.mp4'

import AnimationImage1 from '../../../images/banners/animation-image-1.webp';
import AnimationImage2 from '../../../images/banners/animation-image-2.webp';
import AnimationImage3 from '../../../images/banners/animation-image-3.webp';
import AnimationImage4 from '../../../images/banners/animation-image-4.webp';

import Lookbook1 from '../../../images/banners/lookbook-1.webp'
import Lookbook2 from '../../../images/banners/lookbook-2.webp';
import Lookbook3 from '../../../images/banners/lookbook-3.webp';
import Lookbook4 from '../../../images/banners/lookbook-4.webp';




const LandingPage = () => {

    const isMobile = useMediaQuery('(max-width:900px)');


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
                    <motion.div style={{ fontSize: '5.8rem' }} className='title headline1'>Best Of Designs</motion.div>
                    <AnimatePresence>
                        <ImagesRevealAnimation
                            key='animation1'
                            mainImage={isMobile?AnimationVideoMobile:AnimationVideo}
                            image1={AnimationImage1}
                            image2={AnimationImage2}
                            image3={AnimationImage3}
                            image4={AnimationImage4}
                        />
                    </AnimatePresence>
                </Grid>

                <Grid item xs={12}>
                    <RevealFromBottom>
                        <div className='fixed-banner'>
                            <div style={{ backgroundImage: `url(${DesktopBanner})` }} className='image-layer'></div>
                            <div className='overlay'></div>
                            <div className='content-container'>
                                <div className='title headline1'>Up to 60% Off</div>
                                <button className='transparent-button'>SHOP NOW</button>
                            </div>
                        </div>
                    </RevealFromBottom>
                </Grid>


                <Grid item xs={12}>
                    <ImageInfiniteSlider image1={Lookbook1} image2={Lookbook2} image3={Lookbook3} image4={Lookbook4} />
                </Grid>

                <Grid item xs={12}>
                    <div className='newsletter'>
                        <div className='small-title title1 subtitle1'>
                            NEWSLETTER
                        </div>
                        <div className='main-title headline6'>
                            Subscribe to get
                            the latest updates
                        </div>

                        <div className='content'>
                            <input placeholder='E-mail' type='text'></input>
                            <button className='primary-button'>SUBSCRIBE</button>
                        </div>

                    </div>
                </Grid>




            </Grid>
        </motion.div>
    )
}

export default LandingPage;